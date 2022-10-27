import { GulpTypescriptTask } from "@tasks/classes/typescript.task";
import { GulpTaskOptions } from "@typings/gulp.task.options";
import { GulpWatchTask } from "@tasks/classes/watch.task";

export class GulpScripts {
  protected static tasks = [
    GulpTypescriptTask,
    GulpWatchTask,
  ];

  public static register(options: GulpTaskOptions) {
    this.tasks.forEach((task) => {
      const params = task.create(options);
      options.gulp.task.apply(options.gulp, params);
    });
  }

  public static build(options: GulpTaskOptions) {
    return options.gulp.series(
      [...this.getDefaultTasks()].map((task) => task.kind)
    );
  }

  public static watch(options: GulpTaskOptions) {
    return options.gulp.series([GulpWatchTask.kind]);
  }

  protected static getDefaultTasks() {
    return this.tasks.filter((task) => task.default);
  }
}
