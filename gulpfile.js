'use strict';

var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js-yaml', function(cb) {
  var base = path.dirname(require.resolve('js-yaml'));
  gulp.src(path.resolve(base, 'dist/js-yaml.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
    .on('end', cb)
});

gulp.task('default', ['js-yaml']);


