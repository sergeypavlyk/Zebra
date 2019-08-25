var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')

    .pipe(sass()
    .on('error', function(err){
        this.emit('end');
    })
    )

    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});



gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
})


gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: './'
      },
    })
})