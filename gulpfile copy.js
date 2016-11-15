'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var bases = {
    app: 'public/',
    dist: 'dist/'
};

var paths = {
    scripts: ['public/js/**/*.js'],
    // libs: [
    //     'scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'
    // ],
    styles: ['styles/**/*.css'],
    html: [
        'public/views/*.html', 'public/templates/*.html'
    ],
    images: [
        'img/**/*.png', 'img/**/*.svg'
    ],
    dist: 'dist/'
        // ,extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico']
};

// var paths = {
//     scripts: ['public/js/**/*.js'],
//     html: ['public/views/*.html'],
//     dist: 'dist/'
// };

gulp.task('paths', function() {
    gulp.src(paths.scripts.concat(paths.html)).pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
      gulp.start('sass:watch');
});

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('compress', function() {
    gulp.src('/Users/clxxxii/Documents/dev/calexit/public/*.js').pipe(minify({
        ext: {
            min: '.js'
        },
        ignoreFiles: ['.combo.js', '-min.js']
    })).pipe(gulp.dest('dist'))
});

gulp.task('clean', function() {
    return gulp.src('public/dist', { read: false }).pipe(clean());
});

// // Delete the dist directory
// gulp.task('clean', function() {
//     return gulp.src(bases.dist).pipe(clean());
// });

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
    gulp.src(paths.scripts, { cwd: bases.app }).pipe(jshint()).pipe(jshint.reporter('default')).pipe(uglify()).pipe(concat('app.min.js')).pipe(gulp.dest(bases.dist + 'scripts/'));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
    gulp.src(paths.images, { cwd: bases.app }).pipe(imagemin()).pipe(gulp.dest(bases.dist + 'images/'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
    // Copy html
    gulp.src(paths.html, { cwd: bases.app }).pipe(gulp.dest(bases.dist));

    // Copy styles
    gulp.src(paths.styles, { cwd: bases.app }).pipe(gulp.dest(bases.dist + 'styles'));

    // // Copy lib scripts, maintaining the original directory structure
    // gulp.src(paths.libs, {cwd: 'app/**'}).pipe(gulp.dest(bases.dist));

    // Copy extra html5bp files
    // gulp.src(paths.extras, {cwd: bases.app}).pipe(gulp.dest(bases.dist));
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
    console.log('GULP WATCH');
    gulp.watch('public/**/*', ['default']);
});

gulp.task('concatAngular', function() {
    gulp.src([
            'public/js/ng/controllers/*.js',
            'public/js/ng/*services/*.js',
            'public/js/ng/directives/*.js'
        ])
        .pipe(concat('init.js'))
        .pipe(gulp.dest('public/dist/js/ng'));
});

gulp.task('uglifyAngular', ['concatAngular'], function() {
    gulp.src('public/dist/js/ng/init.js')
        .pipe(uglify())
        .pipe(rename('init.min.js'))
        .pipe(babel({
            presets: ['es2015'], //this fixed a shorthand javascript error
            compact: true
        }))
        .pipe(gulp.dest('public/dist/js/ng/dist'));
});

gulp.task('compileSass', function() {
    gulp.src('public/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/dist/sass/'));
});

// Define the default task as a sequence of the above tasks
// gulp.task('default', ['clean', 'scripts', 'copy']);
// gulp.task('default', ['clean', 'scripts', 'imagemin', 'copy']);

gulp.task('default', ['clean'], function() {
    // gulp.start('paths');
    gulp.start('uglifyAngular');
    gulp.start('compileSass');
    // gulp.start('scripts');
    // gulp.start('imagemin');
    // gulp.start('copy');
    // gulp.start('sass');
    // gulp.start('watch');

    // gulp.start('compress');
    // gulp.start('watch');
});