import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpWatchTask } from "../tasks/classes/watch.task.js";
export declare class GulpScripts {
    protected readonly tasks: (typeof GulpWatchTask)[];
    protected readonly options: GulpTaskOptions;
    constructor(options: Partial<GulpTaskOptions>);
    register(): void;
    build(): import("undertaker").TaskFunction;
    watch(): import("undertaker").TaskFunction;
    protected getDefaultTasks(): (typeof GulpWatchTask)[];
}
