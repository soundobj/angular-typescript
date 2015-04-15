/**
 * Created by dan on 15/04/15.
 */

var gulp = require("gulp");
var ts = require("gulp-typescript");
var rm = require("gulp-rm");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ng = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var karma = require('karma').server;

gulp.task('clean', function() {
    return gulp.src(['dist/*.js'], {read: false})
        .pipe(rm());
});

var tsOptions = {
    sortOutput: true,
    target: 'ES5',
    noExternalResolve: true
};

// depends on clean finishes
gulp.task('build', ['clean'], function() {
    return gulp.src(['typings/**/*.d.ts', 'src/app.ts', 'src/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(concat('app.js'))
        .pipe(ng())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('test', ['build'], function(done) {
   karma.start({
       configFile: __dirname + "/karma.conf.js",
       singleRun: true
   }, done);
});

gulp.task('default', ['build','test']);