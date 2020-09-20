// 'use strict';
//
// const gulp = require('gulp'),
//     eslint = require('gulp-eslint'),
//     gulpsass = require('gulp-sass'),
//     iconfont = require('gulp-iconfont'),
//     bourbon = require('node-bourbon').includePaths,
//     deploypages = require('gulp-gh-pages'),
//     webpack = require('gulp-webpack'),
//     serve = require('gulp-serve'),
//     lunrindex = require('./gulp-plugins/gulp-lunrindex.js'),
//     sitemap = require('./gulp-plugins/gulp-sitemap.js'),
//     clean = require('gulp-clean');
//
// const dest = './dest',
//     fontName = 'appfont';
//
// gulp.task('clean', function () {
//     return gulp.src('dest', {read: false})
//         .pipe(clean());
// });
//
// gulp.task("webpack", function () {
//     var config = require('./webpack.config.js');
//     return gulp.src('src/assets/js/apps/apps.js')
//         .pipe(webpack(config))
//         .pipe(gulp.dest(dest + '/assets/js/'));
// });
//
// gulp.task("webpack-watch", function () {
//     var config = require('./webpack.config.js');
//     config.watch = true;
//     return gulp.src('src/assets/js/apps/apps.js')
//         .pipe(webpack(config))
//         .pipe(gulp.dest(dest + '/assets/js/'));
// });
//
// gulp.task('lint', function () {
//     return gulp.src(['src/assets/js/**'])
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failOnError());
// });
//
// gulp.task('code', function () {
//     return gulp.src([
//         './src/data/archive/**'
//     ])
//         .pipe(gulpCode({
//             outputStyle: 'expanded',
//             includePaths: [
//                 './src/assets/scss'
//             ].concat(bourbon),
//             errLogToConsole: true
//         }))
//         .pipe(gulp.dest(dest + '/data/archive'));
// });
//
// gulp.task('styles', function () {
//     return gulp.src([
//         './src/assets/scss/app.scss'
//     ])
//         .pipe(gulpsass({
//             outputStyle: 'expanded',
//             includePaths: [
//                 './src/assets/scss'
//             ].concat(bourbon),
//             errLogToConsole: true
//         }))
//         .pipe(gulp.dest(dest + '/assets/css'));
// });
//
// gulp.task('iconfont', function () {
//     return gulp.src('./src/assets/fonts/*') // you can also choose 'symbol-font-16px.sketch'
//         .pipe(iconfont({
//             fontName: fontName,
//             appendCodepoints: true,
//             descent: 80
//         }))
//         .pipe(gulp.dest(dest + '/assets/fonts'))
//
// });
//
// gulp.task('resources', function () {
//     return gulp.src(['./src/**', '!./src/assets/**'])
//         .pipe(gulp.dest(dest));
// });
//
// gulp.task('lunrindex', function () {
//     return gulp.src('./src/sitemap.json')
//         .pipe(lunrindex({filename: 'searchindex.json'}))
//         .pipe(gulp.dest(dest));
// });
//
// gulp.task('sitemap', function () {
//     return gulp.src('./src/sitemap.json')
//         .pipe(sitemap({url: 'https://onlinejavaclass.com/#'}))
//         .pipe(gulp.dest(dest));
// });
//
// gulp.task('img', function () {
//     return gulp.src(['./src/assets/img/**'])
//         .pipe(gulp.dest(dest + '/assets/img'));
// });
//
// gulp.task('cname', function () {
//     return gulp.src(['./src/CNAME'])
//         .pipe(gulp.dest(dest));
// });
//
// gulp.task('deploypages', function () {
//     return gulp.src('./dest/**/*')
//         .pipe(deploypages());
// });
//
// gulp.task('watch', function () {
//     gulp.watch('./src/assets/scss/**', gulp.series('styles'));
//     gulp.watch('./src/assets/icons/**', gulp.series('iconfont'));
//     gulp.watch('./node_modules/@onlinejavaclass/marked/lib/**', gulp.series('webpack'));
//     gulp.watch(['./src/**', '!./src/assets/**'], gulp.series('resources'));
//     gulp.watch(['./src/assets/js/apps/**'], gulp.series('webpack'));
//     gulp.watch('./src/assets/img/**', gulp.series('img'));
// });
//
// gulp.task('serve', serve('dest'));
//
// gulp.task('default', gulp.series('styles', 'cname', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'webpack'));
// gulp.task('dev', gulp.series('styles', 'cname', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'webpack', 'watch', 'webpack-watch', 'serve'));


const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const serve = require('gulp-serve');
const bourbon = require('node-bourbon').includePaths;
const cond = require('gulp-cond');
const eslint = require('gulp-eslint');
const lunrindex = require('./gulp-plugins/gulp-lunrindex.js');
const insertLines = require('gulp-insert-lines');
const mocha = require('gulp-mocha');
const sitemap = require('./gulp-plugins/gulp-sitemap.js');
const iconfont = require('gulp-iconfont');
const gutil = require('gulp-util');

// Other libraries
const del = require('del');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');
const {argv} = require('yargs');
require('babel-core/register'); // Needed for mocha tests

// If gulp was called in the terminal with the --prod flag, set the node environment to production
if (argv.prod) {
    process.env.NODE_ENV = 'production';
}
let PROD = process.env.NODE_ENV === 'production';

// Configuration
const src = 'src';
const config = {
    port: PROD ? 8080 : 3000,
    paths: {
        baseDir: 'dest',
        html: src + '/index.html',
        js: src + '/**/*.js',
        entry: src + '/index.js',
        test: src + '/**/*.test.js'
    }
};

/**
 * Gulp Tasks
 **/

// Clears the contents of the dist and build folder
gulp.task('clean', () => {
    return del(['dest/**/*', 'build/**/*']);
});

// Linting
gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
});

// Unit tests
gulp.task('test', () => {
    return gulp.src(config.paths.test, {read: false})
        .pipe(mocha());
});

// Re-runs specific tasks when certain files are changed
gulp.task('watch', () => {
    gulp.watch(config.paths.js, () => {
        runSequence('lint', 'test');
    });
});
const dest = './dest',
    fontName = 'appfont';

// Copies our index.html file from the app folder to either the dist or build folder, depending on the node environment
gulp.task('html', () => {
    return gulp.src(config.paths.html)
        .pipe(cond(PROD, insertLines({
            before: /<\/head>$/,
            'lineBefore': '<link rel="stylesheet" href="bundle.css"/>'
        })))
        .pipe(gulp.dest(dest));
});

// Builds the entire web app into either the dist or build folder, depending on the node environment
gulp.task('build', gulp.series('clean', 'html'), () => {
    return gulp.src(config.paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(config.paths.baseDir));
});


gulp.task('clean', function () {
    return gulp.src('dest', {read: false})
        .pipe(clean());
});

gulp.task("webpack", function () {
    gulp.series('clean', 'html');

    return gulp.src(src)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(config.paths.baseDir));
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

gulp.task('cname', function () {
    return gulp.src(['./src/CNAME'])
        .pipe(gulp.dest(dest));
});

gulp.task('deploypages', function () {
    return gulp.src('./dest/**/*')
        .pipe(deploypages());
});

gulp.task('watch', function () {
    gulp.watch('./src/assets/scss/**', gulp.series('styles'));
    gulp.watch('./src/assets/icons/**', gulp.series('iconfont'));
    gulp.watch('./node_modules/@onlinejavaclass/marked/lib/**', gulp.series('webpack'));
    gulp.watch(['./src/**', '!./src/assets/**'], gulp.series('resources'));
    gulp.watch(['./src/assets/js/apps/**'], gulp.series('webpack'));
    gulp.watch('./src/assets/img/**', gulp.series('img'));
});

gulp.task('serve', serve('dest'));

gulp.task('default', gulp.series('styles', 'cname', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'webpack'));
gulp.task('dev', gulp.series('styles', 'cname', 'resources', 'img', 'lunrindex', 'sitemap', 'iconfont', 'webpack', 'watch', 'webpack-watch', 'serve'));
