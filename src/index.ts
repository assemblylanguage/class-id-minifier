/**
 * Importing and re-exporting the class and id minifier code.
 */

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import {
  minifyClassNames,
  minifyIDs,
  minifyClassNamesAndIDsToAttributes,
} from './lib/index';

import {
  minifyClassNamesPlugin,
  minifyIDsPlugin,
  minifyClassNamesAndIDsToAttributesPlugin,
} from './lib/plugin';

export {
  minifyClassNames,
  minifyIDs,
  minifyClassNamesAndIDsToAttributes,
};

export const plugins = {
  minifyClassNamesPlugin,
  minifyIDsPlugin,
  minifyClassNamesAndIDsToAttributesPlugin,
};
