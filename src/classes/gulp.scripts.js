"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.GulpScripts = void 0;
var typescript_task_1 = require("@tasks/classes/typescript.task");
var watch_task_1 = require("@tasks/classes/watch.task");
var GulpScripts = /** @class */ (function () {
    function GulpScripts() {
    }
    GulpScripts.register = function (options) {
        this.tasks.forEach(function (task) {
            var params = task.create(options);
            options.gulp.task.apply(options.gulp, params);
        });
    };
    GulpScripts.build = function (options) {
        return options.gulp.series(__spreadArray([], this.getDefaultTasks(), true).map(function (task) { return task.kind; }));
    };
    GulpScripts.watch = function (options) {
        return options.gulp.series([watch_task_1.GulpWatchTask.kind]);
    };
    GulpScripts.getDefaultTasks = function () {
        return this.tasks.filter(function (task) { return task["default"]; });
    };
    GulpScripts.tasks = [
        typescript_task_1.GulpTypescriptTask,
        watch_task_1.GulpWatchTask,
    ];
    return GulpScripts;
}());
exports.GulpScripts = GulpScripts;
