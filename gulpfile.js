'use strict';

// Gulp and node
import gulp from 'gulp';
import cp from 'child_process';
import notify from 'gulp-notify';
import size from 'gulp-size';

// Basic workflow plugins
import browserSync from 'browser-sync';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import clean from 'gulp-clean';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

// Performance workflow plugins
import htmlmin from 'gulp-htmlmin';
import prefix from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import {generate} from 'critical';
import sw from 'sw-precache';

// Image Generation
import gulpLoadPlugins from 'gulp-load-plugins'; 
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const { series } = gulp;
const messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

const sass = gulpSass(dartSass);

const $ = gulpLoadPlugins({
  config: process.env.npm_package_json
});

const src = {
  css: '_sass/jekyll-sleek.scss',
  js: '_js/scripts.js',
};

const dist = {
  css: '_site/assets/css',
  js: '_site/assets/js',
};

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
};

// Build the Jekyll Site
gulp.task ("jekyllBuild", function jekyllBuild(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn(jekyll, ['build'], { stdio: 'inherit' })
      .on('close', done);
});

// SASS
gulp.task ("sass", function sassTask() {
  return gulp.src(src.css)
      .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: ['scss'],
          onError: browserSync.notify,
      }).on('error', sass.logError))
      .pipe(sourcemaps.write({ includeContent: false }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(prefix())
      .pipe(sourcemaps.write('./'))
      .pipe(rename({ basename: 'main' }))
      .pipe(gulp.dest(dist.css))
      .pipe(browserSync.reload({ stream: true }))
      .pipe(gulp.dest('assets/css'));
});

//  JS
gulp.task('js', function jsTask() {
  return browserify(src.js, { debug: true, extensions: ['es6'] })
      .transform('babelify', { presets: ['es2015'] })
      .bundle()
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./maps'))
      .pipe(size())
      .pipe(gulp.dest(dist.js))
      .pipe(browserSync.reload({ stream: true }))
      .pipe(gulp.dest('assets/js'));
});

gulp.task("critical", function criticalTask (cb) {
  generate({
    base: '_site/',
    src: 'index.html',
    css: ['assets/css/main.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: '../_includes/critical.css',
    minify: true,
    extract: false,
    ignore: ['@font-face']
  });
});

gulp.task('watch', function watchTask() {
  gulp.watch('_sass/**/*.scss', ['sass']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*.md',  'pages_/*.md', '_include/*html'], ['rebuild']);
  gulp.watch(src.js, ['js']);
});

gulp.task('sw', function swTask() {
  const rootDir ='./';
  const distDir = './_site';

  return sw.write(`${rootDir}/sw.js`, {
    staticFileGlobs: [distDir + '/**/*.{js,html,css,png,jpg,svg}'],
    stripPrefix: distDir
  });
});

gulp.task('img', function imgTask() {
  var dirpath = [];
  var counter = 0;

  gulp.src('_img/*.{png,jpg}')
  .pipe(rename(function (path) {
    // Set the destination directory for each file to be the same as the filename
    dirpath.push('assets/img/posts/' + path.basename);
    console.log(path)
  }));

  return gulp.src('_img/*.{png,jpg}')
  .pipe($.responsive({
      // For all the images in the folder
      '*': [
      {
        // max-width hero
        width: 1920,
      }, {
        width: 230,
        rename: {suffix: '_placehold'},
      }, {
        // thubmnail
        width: 535,
        rename: { suffix: '_thumb' },
      }, {
        // thumbnail @2x
        width: 535 * 2,
        rename: { suffix: '_thumb@2x' },
      }, {
        width: 575,
        rename: { suffix: '_xs'}
      }, {
        width: 767,
        rename: {suffix: '_sm'}
      }, {
        width: 991,
        rename: { suffix: '_md' }
      }, {
        width: 1999,
        rename: { suffix: '_lg' }
      }],
    }, {
      quality: 70,
      progressive: true,
      withMetadata: false,
      silent : true,
      passThroughUnusedFile: true,
      withoutEnlargement: false
    }))
    .pipe(imagemin())  
    .pipe(rename(function (path) {
      const index = Math.floor(counter / 8);
      path.dirname = dirpath[index];
      counter++;
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('html', function htmlTask() {
  gulp.src('./_site/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./_site'))
  gulp.src('./_site/*/*html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./_site/./'))
});

gulp.task('deploy', gulp.series('jekyllBuild', function deploy() {
  return gulp.src('./_site/**/*')
      .pipe(deploy());
}));

gulp.task('rebuild', gulp.series('jekyllBuild', function (done) {
  browserSync.reload();
  done();
}));

gulp.task('clean', function cleanTask() {
  return gulp.src('_site', {read: false})
    .pipe(clean());
});

gulp.task('serve', function serveTask() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('browser-sync', gulp.series('sass', 'js', 'sw', 'jekyllBuild', function browserSyncTask() {
  browserSync({
      server: {
          baseDir: '_site'
      }
  })
}));


gulp.task('build', gulp.series('sass', 'js', 'jekyllBuild', 'sw'));
gulp.task('default', gulp.series('browser-sync', 'watch'));