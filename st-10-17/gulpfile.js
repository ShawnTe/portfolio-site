var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util');
    babel = require('gulp-babel');
    del = require('del');

    var paths = {
      scripts: [
        'assets/js/main.js',
        'assets/js/util.js',
        'assets/js/jquery.min.js',
        'assets/js/jquery.scrollex.min.js',
        'assets/js/jquery.scrolly.min.js',
        'assets/js/skel.min.js'
      ]
    }

    gulp.task('clean', function() {
      // return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
      return del(['dist/assets/css', 'dist/assets/js']);
    });

    gulp.task('styles', function() {
      return gulp.src('assets/css/main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('scripts', function() {
      return gulp.src(paths.scripts)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        // .pipe(gulp.dest('dist/assets/js'))
        // .pipe(uglify())
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('default', ['clean'], function() {
        // gulp.start('styles', 'scripts', 'images');
        gulp.start('styles', 'scripts');
    });
