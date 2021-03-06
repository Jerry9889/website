var gulp = require('gulp');
var ejs = require('gulp-ejs');
var fs = require("fs");
var rename = require('gulp-rename');

gulp.task('ejs', function(done) {
    var comingLocalEvents = JSON.parse(fs.readFileSync('_page/data/coming_local_events.json', 'utf8'));
    var comingForeignEvents = JSON.parse(fs.readFileSync('_page/data/coming_foreign_events.json', 'utf8'));
    var recentEvents = JSON.parse(fs.readFileSync('_page/data/recent_events.json', 'utf8'));
    var pastEvents = JSON.parse(fs.readFileSync('_page/data/past_events.json', 'utf8'));
    gulp.src(['./_page/**/*.ejs'])
        .pipe(ejs({
            comingLocalEvents: comingLocalEvents,
            comingForeignEvents: comingForeignEvents,
            recentEvents: recentEvents,
            pastEvents: pastEvents
        }))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./docs/'));
    done();
});
