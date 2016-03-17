var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('make.css', function () {
    gulp.src('css/main.scss')
        .pipe(sass({
                includePaths: require('node-bourbon').with(require('node-neat').includePaths)
            }
        ))
        .pipe(gulp.dest('.'));
});