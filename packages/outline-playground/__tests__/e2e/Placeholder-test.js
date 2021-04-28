/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {initializeE2E, assertHTMLSnapshot, assertSelection} from '../utils';

describe('Placeholder', () => {
  initializeE2E((e2e) => {
    it(`Displays a placeholder when no content is present`, async () => {
      const {page} = e2e;

      await page.focus('div.editor');
      const textContent = await page.textContent('.editor-placeholder');
      expect(textContent).toBe('Enter some rich text...');

      await assertHTMLSnapshot(page);
      await assertSelection(page, {
        anchorPath: [0, 0, 0],
        anchorOffset: 0,
        focusPath: [0, 0, 0],
        focusOffset: 0,
      });
    });
  });
});