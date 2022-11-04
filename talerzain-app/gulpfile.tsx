const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildCSS() {
    return src('./src/scss/*.scss').pipe(sass()).pipe(dest('./src/css'));
}

function watchTask() {
    watch(['./src/scss/*.scss'], buildCSS)
}

exports.default = series(buildCSS, watchTask);