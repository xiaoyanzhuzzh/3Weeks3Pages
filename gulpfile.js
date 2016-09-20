var gulp = require('gulp');
var del = require('del');

gulp.task('server', function(){
    return gulp.src('./node_modules/font-awesome/**/*')
      .pipe(gulp.dest('./dist/library/font-awesome/'));
});

gulp.task('clean', function(){
    return del(['./dist']);
});

gulp.task('default', ['clean']);
