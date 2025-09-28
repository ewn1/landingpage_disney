const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss') //apenas para recuperar os arquivos
        .pipe(sass({ outputStyle: 'compressed'})) //função para que os arquivos de saída sejam comprimidos para performance
        .pipe(gulp.dest('./dist/css')); //função para envio dos arquivos comprimidos para a past dist
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //arquivos observados e a função executada em parelelo, (styles) é a função acima de compilação
}