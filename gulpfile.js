/**
 * Created by hyb on 15/10/30.
 */
var gulp=require('gulp');
var browserSync=require('browser-sync').create();
var uglify=require('gulp-uglify');
var minifyCss=require('gulp-minify-css');
var rename=require('gulp-rename');
var jshint=require('gulp-jshint');
var livereload=require('gulp-livereload');
var reload=browserSync.reload;
var imageMin=require('gulp-imagemin');
var pngquant=require('imagemin-pngquant');

gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
});

gulp.task('livereload', function () {
    gulp.src('./css/*.css')
        .pipe(livereload({stream:true}))
});

gulp.task('jshint',function(){
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
});

gulp.task('minify-css',function(){
    gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(rename(function(path){
            path.basename+='.min';
            path.extname+='.js';
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('imagemin',function(){
    gulp.src('./img/*.{png,jpg}')
        .pipe(imageMin({ progressive: true, use: [pngquant()]}))
        .pipe(gulp.dest('./img'))
})

gulp.task('uglify',function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path){
            path.basename+='.min';
            path.extname+='.js';
        }))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('normal',function(){
    gulp.src('./*.html')
        .pipe(reload({stream:true}))
});

gulp.task('default',['browser-sync','normal'],function(){
    livereload.listen();
    gulp.watch(['./css/*.css'],['livereload']);
    gulp.watch(['./*.html','./js/*.js','./css/*.css','./img/*.{png,jpg}'],['normal']);
});