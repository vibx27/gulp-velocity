import getPathReplacement from "../functions/get.path.replacement";
import type { GulpTaskOptions } from "@typings/gulp.task.options";
import { Metadata } from "../metadata/typescript.task.metadata";
import { StaticMetadata } from "@decorators/static.metadata";
import { GulpTask } from "@typings/gulp.task";
import ts, { Project } from "gulp-typescript";
import { GulpBaseTask } from "./base.task";
import { exec } from "gulp-execa";
import path from "path";

@StaticMetadata(Metadata)
export class GulpTypescriptTask extends GulpBaseTask {
  public static create(options: GulpTaskOptions): GulpTask {
    const tsProject = GulpTypescriptTask.createTsProject(options);
    const reporter = ts.reporter.fullReporter();

    return [
      this.kind,
      (callback) => {
        const dist = options.gulp.dest(tsProject.config.compilerOptions.outDir);
        tsProject.src().pipe(tsProject(reporter)).pipe(dist).on("end", async () => {
            await this.pathReplacement(options);
            callback();
          });
      },
    ];
  }

  protected static async pathReplacement(options: GulpTaskOptions) {
    const tsconfig = path.join(options.root, "tsconfig.json");
    const tsConfigPath = getPathReplacement(tsconfig);
    await exec(tsConfigPath, {
      verbose: true,
      echo: false,
    });
  }

	protected static createTsProject(options: GulpTaskOptions): Project {
    const tsconfig = path.join(options.root, "tsconfig.json");
    return ts.createProject(tsconfig, {
      outDir: options.distribution,
      rootDir: options.source,
      baseUrl: options.root,
    });
  }
}
