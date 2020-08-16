'use strict';

const gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    gulpsass = require('gulp-sass'),
    iconfont = require('gulp-iconfont'),
    bourbon = require('node-bourbon').includePaths,
    deploypages = require('gulp-gh-pages'),
    webpack = require('gulp-webpack'),
    serve = require('gulp-serve'),
    lunrindex = require('./gulp-plugins/gulp-lunrindex.js'),
    sitemap = require('./gulp-plugins/gulp-sitemap.js'),
    clean = require('gulp-clean');

const dest = './',
    fontName = 'appfont';

gulp.task('clean', function () {
    return gulp.src('dest', {read: false})
        .pipe(clean());
});

gulp.task("webpack", function () {
    var config = require('./webpack.config.js');
    return gulp.src('src/assets/js/apps/apps.js')
        .pipe(webpack(config))
        .pipe(gulp.dest(dest + '/assets/js/'));
});

gulp.task("webpack-watch", function () {
    var config = require('./webpack.config.js');
    config.watch = true;
    return gulp.src('src/assets/js/apps/apps.js')
        .pipe(webpack(config))
        .pipe(gulp.dest(dest + '/assets/js/'));
});

gulp.task('lint', function () {
    return gulp.src(['src/assets/js/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('code', function () {
    return gulp.src([
        './src/data/archive/**'
    ])
        .pipe(gulpCode({
            outputStyle: 'expanded',
            includePaths: [
                './src/assets/scss'
            ].concat(bourbon),
            errLogToConsole: true
        }))
        .pipe(gulp.dest(dest + '/data/archive'));
});

gulp.task('styles', function () {
    return gulp.src([
        './src/assets/scss/app.scss'
    ])
        .pipe(gulpsass({
            outputStyle: 'expanded',
            includePaths: [
                './src/assets/scss'
            ].concat(bourbon),
            errLogToConsole: true
        }))
        .pipe(gulp.dest(dest + '/assets/css'));
});

gulp.task('iconfont', function () {
    return gulp.src('./src/assets/fonts/*') // you can also choose 'symbol-font-16px.sketch'
        .pipe(iconfont({
            fontName: fontName,
            appendCodepoints: true,
            descent: 80
        }))
        .pipe(gulp.dest(dest + '/assets/fonts'))

});

gulp.task('resources', function () {
    return gulp.src(['./src/**', '!./src/assets/**'])
        .pipe(gulp.dest(dest));
});

gulp.task('lunrindex', function () {
    return gulp.src('./src/sitemap.json')
        .pipe(lunrindex({filename: 'searchindex.json'}))
        .pipe(gulp.dest(dest));
});

gulp.task('sitemap', function () {
    return gulp.src('./src/sitemap.json')
        .pipe(sitemap({url: 'https://onlinejavaclass.com/#'}))
        .pipe(gulp.dest(dest));
});

gulp.task('img', function () {
    return gulp.src(['./src/assets/img/**'])
        .pipe(gulp.dest(dest + '/assets/img'));
});

gulp.task('deploypages', function () {
    return gulp.src('./dest/**/*')
        .pipe(deploypages());
});

gulp.task('watch', function () {
    gulp.watch('./src/assets/scss/**', gulp.series('styles'));
    gulp.watch('./src/assets/icons/**', gulp.series('iconfont'));
    gulp.watch('./node_modules/marked/lib/**', gulp.series('webpack'));
    gulp.watch(['./src/**', '!./src/assets/**'], gulp.series('resources'));
    gulp.watch(['./src/assets/js/apps/**'], gulp.series('webpack'));
    gulp.watch('./src/assets/img/**', gulp.series('img'));
});

gulp.task('serve', serve('dest'));

gulp.task('default', gulp.series('styles', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'webpack'));
gulp.task('dev', gulp.series('styles', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'webpack', 'watch', 'webpack-watch', 'serve'));
