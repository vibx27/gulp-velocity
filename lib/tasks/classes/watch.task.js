import { __decorate } from "tslib";
import { StaticMetadata } from "../../decorators/static.metadata.js";
import { Metadata } from "../metadata/watch.task.metadata.js";
import { GulpBaseTask } from "./base.task.js";
import nodemon from "gulp-nodemon";
import path from "path";
let GulpWatchTask = class GulpWatchTask extends GulpBaseTask {
    static create(options) {
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
};
GulpWatchTask = __decorate([
    StaticMetadata(Metadata)
], GulpWatchTask);
export { GulpWatchTask };
//# sourceMappingURL=watch.task.js.map