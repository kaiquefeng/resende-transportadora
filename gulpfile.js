"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
// const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

const scssFiles = './sass/**/*.scss';
const cssDest = './';

const sassOptions = {
	outputStyle: 'compressed'
}

function sassdev() {
    return gulp
        .src(scssFiles)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        // .pipe(autoprefixer({
        //     cascade: true
        // }))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest(cssDest));
}

function watch() {
    gulp.watch(scssFiles, sassdev);
}

exports.default = gulp.parallel(sassdev, watch);