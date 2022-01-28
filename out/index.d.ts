/**
 * Importing and re-exporting the class and id minifier code.
 */
import { minifyClassNames, minifyIDs, minifyClassNamesAndIDsToAttributes } from './lib/index';
import { minifyClassNamesPlugin, minifyIDsPlugin, minifyClassNamesAndIDsToAttributesPlugin } from './lib/plugin';
export { minifyClassNames, minifyIDs, minifyClassNamesAndIDsToAttributes, };
export declare const plugins: {
    minifyClassNamesPlugin: typeof minifyClassNamesPlugin;
    minifyIDsPlugin: typeof minifyIDsPlugin;
    minifyClassNamesAndIDsToAttributesPlugin: typeof minifyClassNamesAndIDsToAttributesPlugin;
};
//# sourceMappingURL=index.d.ts.map