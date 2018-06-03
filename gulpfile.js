'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat'); 

gulp.task('sass', function () {
  return gulp.src('./source/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./deploy/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./source/**/*.scss', ['sass']);
});