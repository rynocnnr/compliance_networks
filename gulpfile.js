var gulp = require('gulp'),
//	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
//	imagemin = require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer')
//	concat = require('gulp-concat'),
//	rename = require('gulp-rename');

// Scripts Task
// Uglifies

/*
gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
// 		.pipe(concat('all.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/js'));
});
*/

// Reload
// Reload Stuff

gulp.task('reload', function() {
	gulp.src('*.html')
	.pipe(livereload());
});

// Styles Task
// Compile SASS

gulp.task('styles', function () {
    gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
	    browsers: ['last 2 versions'],
	    cascade: false })
	)
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Image Task
// Compress Images

/*
gulp.task('image', function () {
    gulp.src('images/*')
    	.pipe(imagemin())
    	.pipe(gulp.dest('build/img'));
});
*/

// Watch Task
// Watching JS & SCSS

gulp.task('watch', function() {
	livereload.listen();
//	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
	gulp.watch('*.html', ['reload']);
//	gulp.watch('images', ['image']);
});

gulp.task('default', ['styles', 'watch']);
//gulp.task('default', ['scripts', 'styles', 'watch', 'image']);