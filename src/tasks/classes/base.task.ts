import { StaticImplements } from "@decorators/static.implements";
import { GulpTaskMetadata } from "@typings/gulp.task.metadata";
import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpTask } from "@typings/gulp.task";

@StaticImplements<GulpTaskMetadata>()
export abstract class GulpBaseTask {
  public static readonly kind: string;
  public static readonly default: boolean;
  public static readonly description: string;

  public static create(options: GulpTaskOptions): GulpTask {
    return [
      this.kind,
      (callback) => {
        // Edit here...
        callback();
      },
    ];
  }
}
