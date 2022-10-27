export function StaticMetadata(metadata) {
    return (target) => {
        for (const property in metadata) {
            if (metadata.hasOwnProperty(property)) {
                Object.defineProperty(target, property, {
                    get: () => metadata[property],
                });
            }
        }
    };
}
//# sourceMappingURL=static.metadata.js.map