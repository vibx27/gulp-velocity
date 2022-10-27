import { GulpTaskMetadata } from "@typings/gulp.task.metadata";

export function StaticMetadata(metadata: GulpTaskMetadata) {
  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Object.defineProperty(target, property, {
          get: () => metadata[property],
        });
      }
    }
  };
}
