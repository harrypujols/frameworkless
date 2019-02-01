var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    webpack     = require('webpack-stream'),
    html        = require('gulp-nunjucks-render'),
    data        = require('gulp-data'),
    imagemin    = require('gulp-imagemin'),
    browsersync = require('browser-sync').create();

    gulp.task('webpack', ()=> {
      gulp.src('./dev/js/index.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('./build/js'));
    })

    gulp.task('sass', ()=> {
      return gulp.src('./dev/sass/*.scss')
            .pipe(sass({
              outputStyle : 'expanded'
            }).on('error', sass.logError))
            .pipe(gulp.dest('./build/css'))
            .pipe(browsersync.stream());
    })

    gulp.task('html', ()=> {
      return gulp.src('./dev/templates/*.html')
        .pipe(data(function() {
          return require('./dev/data/data.json')
        }))
        .pipe(html({
          path: ['./dev/templates']
        }))
        .pipe(gulp.dest('./build'));
    })

    gulp.task('image', ()=> {
      return gulp.src('./dev/img/**')
      .pipe(imagemin([
        imagemin.svgo({
            plugins: [
                {
                  addClassesToSVGElement: {
                    classNames: ['svg']
                  }
                },
                {
                  removeViewBox: false
                },
                {
                  removeDimensions: true
                }
            ]
        })
      ]))
        .pipe(gulp.dest('./build/img'));
    })

    gulp.task('serve', ['sass', 'webpack', 'html', 'image'], ()=> {
      browsersync.init({
        server: './build'
      })

      gulp.watch(['./dev/js/*.js', './dev/js/**/*.js'], ['webpack'])
      gulp.watch(['./dev/sass/*.scss', './dev/sass/**/*.scss'], ['sass'])
      gulp.watch(['./dev/templates/*.html', './dev/templates/**/*.html'], ['html'])
      gulp.watch('./build/index.html').on('change', browsersync.reload)
    })

    gulp.task('default', ['serve'])
