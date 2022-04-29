const gulp = require('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();

// Compile SASS
gulp.task("sass", () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets'))
    .pipe(browsersync.reload({ stream: true }));
});

// Start App on Browser
gulp.task('browser-sync', () => {
  browsersync.init({
    server: "./"
  });
});

// Detect Changes
gulp.task("watch", () => {
  gulp.watch('./src/scss/*.scss', gulp.series("sass"));
  gulp.watch('./**/*.js').on('change', browsersync.reload);
  gulp.watch('*.html').on('change', browsersync.reload);
});

gulp.task('default', gulp.series(gulp.parallel('sass', 'browser-sync', 'watch')));
