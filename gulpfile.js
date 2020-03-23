// Chargement des plugins
var gulp = require('gulp');
var sass = require('gulp-sass'); // => Pour pouvoir charger 'gulp-sass' il faut l'installer via la console
// installer gulp-sass via la console : npm install --save-dev gulp-sass
// Warning ! Cette installation est à réaliser pour chaque plugin supplémentaire (voir doc du plugin en question) !!! 



// Notre script : la liste et la définition des tâches que l'on veut effectuer

// Tache 1 : 'scss' => compiler le SCSS en CSS :
gulp.task('scss', (done) => {
    gulp.src('./assets/scss/bootstrap.scss') // Source du fichier que nous voulons traduire en css
      .pipe(sass())                      // Appelle de du module sass, qui s'occupe de traduire notre scss en css
      .pipe(gulp.dest('./dist/css/'))   // Chemin de destination du fichier une fois compilé en css
      // .pipe(livereload())
      done();
});






// Fonctions de lancement qui execute nos tâches dans un précis





