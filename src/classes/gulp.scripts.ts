import { GulpTypescriptTask } from "@tasks/classes/typescript.task";
import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpWatchTask } from "@tasks/classes/watch.task";
import { createRequire } from "module";
import path from "path";

export class GulpScripts {
	protected readonly tasks = [GulpTypescriptTask, GulpWatchTask];
	protected readonly options: GulpTaskOptions = undefined;

	constructor(options: Partial<GulpTaskOptions>) {
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

  public register() {
    this.tasks.forEach((task) => {
      const params = task.create(this.options);
      this.options.gulp.task.apply(this.options.gulp, params);
    });
  }

  public build() {
    return this.options.gulp.series(
      [...this.getDefaultTasks()].map((task) => task.kind)
    );
  }

  public watch() {
    return this.options.gulp.series([GulpWatchTask.kind]);
  }

  protected getDefaultTasks() {
    return this.tasks.filter((task) => task.default);
  }
}
