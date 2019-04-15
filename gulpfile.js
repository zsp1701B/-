let gulp = require('gulp');
let css = require('gulp-minify-css');
let scss = require('gulp-sass');
let js = require('gulp-uglify');
let fs = require('fs');
let path = require('path')
let server = require('gulp-webserver')

gulp.task('css', () => {
    return gulp.src('./src/css/*.css')
        .pipe(css())
        .pipe(concat('main.min.css'))
        .pipe(dest('./dist/css'))
})

gulp.task('js', () => {
    return gulp.src('./src/js/*.js')
        .pipe(js())
        .pipe(concat('main.min.js'))
        .pipe(dest('./dist/js'))
})

gulp.task('img', () => {
    return gulp.src('src/img/*.jpg')
        .pipe(img())
        .pipe(dest('./dist/img'))
})

gulp.webServer('server', () => {
    host: '8080',
    leaverload: true
})