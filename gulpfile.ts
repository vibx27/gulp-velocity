import { GulpScripts } from "./src/classes/gulp.scripts";
import path from "path";
import url from "url";

const gulp = new GulpScripts({
	root: path.dirname(url.fileURLToPath(import.meta.url)),
	distribution: 'dist',
	source: 'src'
});

export const build = gulp.build();
export const watch = gulp.watch();
