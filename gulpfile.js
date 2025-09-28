const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') //apenas para recuperar os arquivos
        .pipe(sass({ outputStyle: 'compressed'})) //função para que os arquivos de saída sejam comprimidos para performance
        .pipe(gulp.dest('./dist/css')); //função para envio dos arquivos comprimidos para a past dist
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //arquivos observados e a função executada em parelelo, (styles) é a função acima de compilação
}