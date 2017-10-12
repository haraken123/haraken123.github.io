var gulp = require("gulp");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass', 'pug', 'watch']);


gulp.task('watch', () => {
    gulp.watch(['./sass/**'], () => {
        gulp.start(['sass']);
    });
    gulp.watch(['./pug/**'], () => {
        gulp.start(['pug']);
    });
});


gulp.task("sass", function() {
    gulp.src("./sass/*.sass")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"));
});

gulp.task("pug", function() {
    gulp.src("./pug/*.pug")
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest("./"))
});