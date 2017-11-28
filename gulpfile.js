const gulp = require("gulp");
const typescript = require("gulp-typescript");

gulp.task("build", function () {
    const project = typescript.createProject("tsconfig.json");
    gulp.src("src/**/*.ts")
            .pipe(project())
            .pipe(gulp.dest("dist/"));
});

gulp.task("default", [ "build" ]);
