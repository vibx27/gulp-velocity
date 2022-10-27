import { GulpTaskOptions } from "./src/typings/gulp.task.options";
import { GulpScripts } from "./src/classes/gulp.scripts";
import gulp from "gulp";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distribution = path.join(dirname, "lib");
const source = path.join(dirname, "src");

const options: GulpTaskOptions = {
  environment: process.env.NODE_ENV,
  distribution: distribution,
  source: source,
  root: dirname,
  gulp: gulp,
};

GulpScripts.register(options);
export const build = GulpScripts.build(options);
