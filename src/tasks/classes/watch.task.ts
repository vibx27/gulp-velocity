import { GulpTaskOptions } from "@typings/gulp.task.options";
import { StaticMetadata } from "@decorators/static.metadata";
import { Metadata } from "../metadata/watch.task.metadata";
import { GulpTask } from "@typings/gulp.task";
import { GulpBaseTask } from "./base.task";
import nodemon from "gulp-nodemon";
import path from "path";

@StaticMetadata(Metadata)
export class GulpWatchTask extends GulpBaseTask {
  public static create(options: GulpTaskOptions): GulpTask {
    return [
      this.kind,
      (callback) => {
        const index = path.join(options.distribution, "main.js");
        nodemon({
          script: index,
          done: callback,
          readable: true,
          ext: "js ts json",
          stdout: console.log,
          watch: [options.source],
        });
      },
    ];
  }
}
