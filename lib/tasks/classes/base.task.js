import { __decorate } from "tslib";
import { StaticImplements } from "@decorators/static.implements";
let GulpBaseTask = class GulpBaseTask {
    static create(options) {
        return [
            this.kind,
            (callback) => {
                callback();
            },
        ];
    }
};
GulpBaseTask = __decorate([
    StaticImplements()
], GulpBaseTask);
export { GulpBaseTask };
//# sourceMappingURL=base.task.js.map