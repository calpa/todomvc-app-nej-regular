var gulp = require('gulp');
var connect = require('gulp-connect');

// create livereload server
gulp.task('connect', function() {

    return connect.server({
        livereload: true
    });
});

// reload when html file changes
gulp.task('html', function() {

    return gulp.src('./index.html')
    .pipe(connect.reload());
});

// reload when css file changes
gulp.task('css', function() {

    return gulp.src('./css/app.css')
    .pipe(connect.reload());
});

// reload when template files change
gulp.task('template', function() {
    return gulp.src('./js/*.html')
    .pipe(connect.reload());
});

// reload when js files change
gulp.task('js', function() {

    return gulp.src('./js/*.js')
    .pipe(connect.reload());
});

// watch html and js files
gulp.task('watch', function() {

    function logger(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    }

    var htmlWatcher = gulp.watch('./index.html', ['html']);
    htmlWatcher.on('change', logger);

    var cssWatcher = gulp.watch('./css/app.css', ['css']);
    cssWatcher.on('change', logger);

    var templateWatcher = gulp.watch('./js/*.html', ['template']);
    templateWatcher.on('change', logger);

    var jsWatcher = gulp.watch('./js/*.js', ['js']);
    jsWatcher.on('change', logger);
});

gulp.task('dev', ['connect', 'watch']);