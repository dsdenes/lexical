/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Transformer} from '@lexical/markdown/LexicalMarkdown';

export default function LexicalMarkdownShortcutPlugin(props: {
  transformers: Array<Transformer>;
}): JSX.Element | null;
