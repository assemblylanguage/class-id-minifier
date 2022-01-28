"use strict";
/**
 * Importing and re-exporting the class and id minifier code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = exports.minifyClassNamesAndIDsToAttributes = exports.minifyIDs = exports.minifyClassNames = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const index_1 = require("./lib/index");
Object.defineProperty(exports, "minifyClassNames", { enumerable: true, get: function () { return index_1.minifyClassNames; } });
Object.defineProperty(exports, "minifyIDs", { enumerable: true, get: function () { return index_1.minifyIDs; } });
Object.defineProperty(exports, "minifyClassNamesAndIDsToAttributes", { enumerable: true, get: function () { return index_1.minifyClassNamesAndIDsToAttributes; } });
const plugin_1 = require("./lib/plugin");
exports.plugins = {
    minifyClassNamesPlugin: plugin_1.minifyClassNamesPlugin,
    minifyIDsPlugin: plugin_1.minifyIDsPlugin,
    minifyClassNamesAndIDsToAttributesPlugin: plugin_1.minifyClassNamesAndIDsToAttributesPlugin,
};
//# sourceMappingURL=index.js.map