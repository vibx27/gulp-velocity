import type { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpTask } from "@typings/gulp.task";
import { Project } from "gulp-typescript";
import { GulpBaseTask } from "./base.task";
export declare class GulpTypescriptTask extends GulpBaseTask {
    static create(options: GulpTaskOptions): GulpTask;
    protected static pathReplacement(options: GulpTaskOptions): Promise<void>;
    protected static createTsProject(options: GulpTaskOptions): Project;
}
