var gulp = require('gulp');
var ts = require('gulp-typescript');
var rm = require('gulp-rm');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ng = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var karma = require('karma').server;
var bower = require('main-bower-files');

gulp.task('clean', function() {
    return gulp.src(['dist/*.js'], {read: false})
        .pipe(rm());
});

var tsOptions = {
    sortOutput: true,
    target: 'ES5',
    noExternalResolve: true
};

gulp.task('build', ['clean'], function() {
    return gulp.src(['typings/**/*.d.ts','src/app.ts','src/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(concat('app.js'))
        .pipe(ng())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('test', ['build'], function runKarma(done) {
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done);
});

gulp.task('watch-test', function runKarma(done) {
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true,
        reporters: ['dots']
    }, done);
});

gulp.task('bower', function() {
    return gulp.src(bower())
        .pipe(gulp.dest('vendor'));
});

gulp.task('default', ['clean', 'build', 'bower']);

gulp.task('watch', ['default'], function() {
    gulp.watch(['src/*.ts'], ['build']);
    gulp.watch(['bower.json'], ['bower']);
    gulp.watch(['dist/*.js'], ['watch-test']);
});


