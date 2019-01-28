import 'package:build_runner/build_runner.dart' as _i1;
import 'package:source_gen/builder.dart' as _i2;
import 'package:sass_builder/sass_builder.dart' as _i3;
import 'package:build/build.dart' as _i4;
import 'package:angular/builder.dart' as _i5;
import 'package:build_modules/builders.dart' as _i6;
import 'package:build_web_compilers/builders.dart' as _i7;
import 'package:build_config/build_config.dart' as _i8;
import 'dart:isolate' as _i9;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('source_gen|combining_builder', [_i2.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen|part_cleanup']),
  _i1.apply('sass_builder|sass_builder', [_i3.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true,
      defaultReleaseOptions:
          new _i4.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: ['sass_builder|sass_source_cleanup']),
  _i1.apply(
      'angular|angular',
      [_i5.templatePlaceholder, _i5.templateCompiler, _i5.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'angular|placeholder_cleanup',
        'angular|component_source_cleanup'
      ]),
  _i1.apply(
      'build_modules|modules',
      [
        _i6.moduleLibraryBuilder,
        _i6.metaModuleBuilder,
        _i6.metaModuleCleanBuilder,
        _i6.moduleBuilder,
        _i6.unlinkedSummaryBuilder,
        _i6.linkedSummaryBuilder
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i7.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_web_compilers|dart_source_cleanup']),
  _i1.apply('build_web_compilers|entrypoint', [_i7.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i8.InputSet(include: const [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: const [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: new _i4.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: new _i4.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('source_gen|part_cleanup', _i2.partCleanup,
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess('angular|placeholder_cleanup', _i5.placeholderCleanup,
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess(
      'angular|component_source_cleanup', _i5.componentSourceCleanup,
      defaultReleaseOptions: new _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i8.InputSet(include: const ['lib/**'])),
  _i1.applyPostProcess(
      'sass_builder|sass_source_cleanup', _i3.sassSourceCleanup,
      defaultReleaseOptions: new _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess('build_modules|module_cleanup', _i6.moduleCleanup,
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers|dart_source_cleanup', _i7.dartSourceCleanup,
      defaultReleaseOptions: new _i4.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i8.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i7.dart2JsArchiveExtractor,
      defaultReleaseOptions: new _i4.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i8.InputSet())
];
main(List<String> args, [_i9.SendPort sendPort]) async {
  var result = await _i1.run(args, _builders);
  sendPort?.send(result);
}
