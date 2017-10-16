var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    webpack     = require('webpack-stream'),
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
              .pipe(sass())
              .pipe(gulp.dest('./css'))
              .pipe(browsersync.stream());
    })

    gulp.task('serve', ['sass', 'webpack'], ()=> {
      browsersync.init({
        server: './'
    })

      gulp.watch(['./js/*.js', './js/**/*.js'], ['webpack'])
      gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass'])
      gulp.watch('./index.html').on('change', browsersync.reload)
    })

    gulp.task('default', ['serve'])
