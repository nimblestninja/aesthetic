
'use strict';

var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	notify = require('gulp-notify'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber');


// CSS
gulp.task('css', function(){

	gulp.src('./css/main.scss')
	 .pipe(plumber())
	 .pipe(sourcemaps.init())
	 .pipe(sass().on('error', sass.logError))
	 .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	 .pipe(rename({suffix: '.min'}))
	 .pipe(cssnano())
	 .pipe(sourcemaps.write('.'))
	 .pipe(plumber.stop())
	 .pipe(gulp.dest('../assets/css/'))
	 .pipe(livereload())
	 .pipe(notify({message: 'Done with CSS Task'}));

});


// JS
gulp.task('js', function(){

});


gulp.task('default', function(){
	gulp.start('css');
});

gulp.task('watch', function(){

});