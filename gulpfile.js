const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('js', () => {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('src/style.css')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('js', 'html', 'css'));


gulp.task('watch', () => {
  gulp.watch('src/*.js', gulp.series('js'));
  gulp.watch('src/index.html', gulp.series('html'));
  gulp.watch('src/*.css', gulp.series('css'));
});
