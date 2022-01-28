/**
 * Plugins for humble.
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import {
  minifyClassNames,
  minifyIDs,
  minifyClassNamesAndIDsToAttributes,
} from './index';

/**
 * A plugin wrapper for the `minifyClassNames` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyClassNamesPlugin(
  humble: any,
) : Promise<void> {
  await minifyClassNames(humble.document);
}

/**
 * A plugin wrapper for the `minifyIDs` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyIDsPlugin(
  humble: any,
) : Promise<void> {
  await minifyIDs(humble.document);
}

/**
 * A plugin wrapper for the `minifyClassNamesAndIDsToAttributes` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyClassNamesAndIDsToAttributesPlugin(
  humble: any,
) : Promise<void> {
  await minifyClassNamesAndIDsToAttributes(
    humble.document,
  );
}
