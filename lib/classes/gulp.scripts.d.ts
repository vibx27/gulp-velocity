import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpWatchTask } from "@tasks/classes/watch.task";
export declare class GulpScripts {
    protected static tasks: (typeof GulpWatchTask)[];
    static register(options: GulpTaskOptions): void;
    static build(options: GulpTaskOptions): import("undertaker").TaskFunction;
    static watch(options: GulpTaskOptions): import("undertaker").TaskFunction;
    protected static getDefaultTasks(): (typeof GulpWatchTask)[];
}
