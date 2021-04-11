'use strict';

const gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    gulpsass = require('gulp-sass'),
    iconfont = require('gulp-iconfont'),
    bourbon = require('node-bourbon').includePaths,
    webpack = require('gulp-webpack'),
    serve = require('gulp-serve'),
    converter = require('./src/gulp/gulp-plugins/gulp-converter.js'),
    lunrindex = require('./src/gulp/gulp-plugins/gulp-lunrindex.js'),
    sitemap = require('./src/gulp/gulp-plugins/gulp-sitemap.js'),
    clean = require('gulp-clean');

const dest = './deployment',
    fontName = 'appfont';

gulp.task('clean', function () {
    return gulp.src(dest, {read: false})
        .pipe(clean());
});

gulp.task("webpack", function () {
    const config = require('./src/webpack/webpack.config.js');
    return gulp.src('src/assets/js/apps/apps.js')
        .pipe(webpack(config))
        .pipe(gulp.dest(dest + '/assets/js/'));
});

gulp.task("webpack-watch", function () {
    const config = require('./webpack/webpack.config.js');
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

gulp.task('styles', function () {
    return gulp.src([
        './src/assets/scss/app.scss'
    ]).pipe(gulpsass({
        outputStyle: 'expanded',
        includePaths: [
            './src/assets/scss'
        ].concat(bourbon),
        errLogToConsole: true
    })).pipe(gulp.dest(dest + '/assets/css'));
});

gulp.task('iconfont', function () {
    return gulp.src('./src/assets/fonts/*') // you can also choose 'symbol-font-16px.sketch'
        .pipe(iconfont({
            fontName: fontName,
            appendCodepoints: true,
            descent: 80
        })).pipe(gulp.dest(dest + '/assets/fonts'))
});

gulp.task('resources', function () {
    return gulp.src(['./src/**', '!./src/data/**/*.md', '!./src/assets/**', '!./src/gulp/**', '!./src/webpack/**'])
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

gulp.task('CNAME', function () {
    return gulp.src(['./src/CNAME'])
        .pipe(gulp.dest(dest))
})

gulp.task('watch', function () {
    gulp.watch('./src/assets/scss/**', gulp.series('styles'));
    gulp.watch('./src/assets/icons/**', gulp.series('iconfont'));
    gulp.watch('./node_modules/@onlinejavaclass/marked/lib/**', gulp.series('webpack'));
    gulp.watch(['./src/**', '!./src/assets/**'], gulp.series('resources'));
    gulp.watch(['./src/assets/js/apps/**'], gulp.series('webpack'));
    gulp.watch('./src/assets/img/**', gulp.series('img'));
});

gulp.task('convert2html', function () {
    return gulp.src([
        './src/data/**'
    ]).pipe(converter({
        outExtension: '.html',
        dest: dest,
        errLogToConsole: true
    })).pipe(gulp.dest(dest + '/data'))
});

gulp.task('serve', serve(dest));

gulp.task('default', gulp.series('styles', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'convert2html', 'webpack', 'CNAME'));
gulp.task('dev', gulp.series('styles', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'convert2html', 'webpack', 'serve', 'watch', 'webpack-watch', 'serve'));