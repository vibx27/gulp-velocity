import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpTask } from "@typings/gulp.task";
export declare abstract class GulpBaseTask {
    static readonly kind: string;
    static readonly default: boolean;
    static readonly description: string;
    static create(options: GulpTaskOptions): GulpTask;
}
