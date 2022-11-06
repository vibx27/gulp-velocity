import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpTask } from "@typings/gulp.task";
import { GulpBaseTask } from "./base.task.js";
export declare class GulpWatchTask extends GulpBaseTask {
    static create(options: GulpTaskOptions): GulpTask;
}
