var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    glob        = require('gulp-sass-glob'),
    webpack     = require('webpack-stream'),
    html        = require('gulp-nunjucks-render'),
    data        = require('gulp-data'),
    browsersync = require('browser-sync').create();

    gulp.task('webpack', ()=> {
      gulp.src('./js/index.js')
        .pipe( webpack({
          watch: true,
          output: {
            filename: 'app.js'
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              },
            ]
          }
        }))
        .pipe(gulp.dest('./js'));
    })

    gulp.task('sass', ()=> {
      return gulp.src('./sass/*.scss')
            .pipe(glob())
            .pipe(sass({
              outputStyle : 'expanded'
            }).on('error', sass.logError))
            .pipe(gulp.dest('./css'))
            .pipe(browsersync.stream());
    })

    gulp.task('html', function () {
      return gulp.src('./templates/*.html')
        .pipe(data(function() {
          return require('./data/data.json')
        }))
        .pipe(html({
          path: ['./templates']
        }))
        .pipe(gulp.dest('./'));
    })

    gulp.task('serve', ['sass', 'webpack'], ()=> {
      browsersync.init({
        server: './'
      })

      gulp.watch(['./js/*.js', './js/**/*.js'], ['webpack'])
      gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass'])
      gulp.watch(['./templates/*.html', './templates/**/*.html'], ['html'])
      gulp.watch('./index.html').on('change', browsersync.reload)
    })

    gulp.task('default', ['serve'])
