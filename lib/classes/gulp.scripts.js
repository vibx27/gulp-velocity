import { GulpTypescriptTask } from "@tasks/classes/typescript.task";
import { GulpWatchTask } from "@tasks/classes/watch.task";
export class GulpScripts {
    static register(options) {
        this.tasks.forEach((task) => {
            const params = task.create(options);
            options.gulp.task.apply(options.gulp, params);
        });
    }
    static build(options) {
        return options.gulp.series([...this.getDefaultTasks()].map((task) => task.kind));
    }
    static watch(options) {
        return options.gulp.series([GulpWatchTask.kind]);
    }
    static getDefaultTasks() {
        return this.tasks.filter((task) => task.default);
    }
}
Object.defineProperty(GulpScripts, "tasks", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        GulpTypescriptTask,
        GulpWatchTask,
    ]
});
//# sourceMappingURL=gulp.scripts.js.map