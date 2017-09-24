'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var input = './sass/**/*.scss';
var output = './css/';

var sassOptions = {
 errLogToConsole: true,
 outputStyle: 'expanded'
};

/*Sass Tasks*/
gulp.task('sass', function(){
	return gulp
	    .src(input)
	    .pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(gulp.dest(output));
});

/*Watch Task*/
gulp.task('watch', function(){
	return gulp
	     .watch(input, ['sass'])
	     .on('change', function(event){
	     console.log('File' + event.path + ' was ' + event.type + ' running tasks...');
	     });

});


gulp.task('default', ['sass', 'watch']);


//gulp.task('default', function(){
//	gulp.watch('./sass/**/*.scss',['sass']);
//});
