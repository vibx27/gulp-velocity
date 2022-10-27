var GulpTypescriptTask_1;
import { __decorate } from "tslib";
import getPathReplacement from "../functions/get.path.replacement";
import { Metadata } from "../metadata/typescript.task.metadata";
import { StaticMetadata } from "@decorators/static.metadata";
import ts from "gulp-typescript";
import { GulpBaseTask } from "./base.task";
import { exec } from "gulp-execa";
import path from "path";
let GulpTypescriptTask = GulpTypescriptTask_1 = class GulpTypescriptTask extends GulpBaseTask {
    static create(options) {
        const tsProject = GulpTypescriptTask_1.createTsProject(options);
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
    static async pathReplacement(options) {
        const tsconfig = path.join(options.root, "tsconfig.json");
        const tsConfigPath = getPathReplacement(tsconfig);
        await exec(tsConfigPath, {
            verbose: true,
            echo: false,
        });
    }
    static createTsProject(options) {
        const tsconfig = path.join(options.root, "tsconfig.json");
        return ts.createProject(tsconfig, {
            outDir: options.distribution,
            rootDir: options.source,
            baseUrl: options.root,
        });
    }
};
GulpTypescriptTask = GulpTypescriptTask_1 = __decorate([
    StaticMetadata(Metadata)
], GulpTypescriptTask);
export { GulpTypescriptTask };
//# sourceMappingURL=typescript.task.js.map