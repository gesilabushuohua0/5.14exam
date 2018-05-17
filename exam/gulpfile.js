let gulp = require("gulp")
let webserver = require("gulp-webserver");
let data = require("./src/data/data.json")
gulp.task("server", function() {
    gulp.src("src")
        .pipe(webserver({
            port: 3434,
            open: true,
            livereload: true,
            host: "localhost",
            middleware: function(req, res, next) {
                if (req.url === '/app/exam') {
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})
gulp.task("default", ["server"])