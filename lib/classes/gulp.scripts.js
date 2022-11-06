import { GulpTypescriptTask } from "../tasks/classes/typescript.task.js";
import { GulpWatchTask } from "../tasks/classes/watch.task.js";
import { createRequire } from "module";
import path from "path";
export class GulpScripts {
    constructor(options) {
        Object.defineProperty(this, "tasks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [GulpTypescriptTask, GulpWatchTask]
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        const require = createRequire(import.meta.url);
        const distribution = path.join(options.root, options.distribution);
        const source = path.join(options.root, options.source);
        this.options = {
            environment: process.env.NODE_ENV,
            gulp: require('gulp'),
            root: options.root,
            distribution,
            source
        };
        this.register();
    }
    register() {
        this.tasks.forEach((task) => {
            const params = task.create(this.options);
            this.options.gulp.task.apply(this.options.gulp, params);
        });
    }
    build() {
        return this.options.gulp.series([...this.getDefaultTasks()].map((task) => task.kind));
    }
    watch() {
        return this.options.gulp.series([GulpWatchTask.kind]);
    }
    getDefaultTasks() {
        return this.tasks.filter((task) => task.default);
    }
}
//# sourceMappingURL=gulp.scripts.js.map