import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export function remarkMermaid() {
  return (tree: Root) => {
    visit(tree, 'code', (node: any, index, parent) => {
      if (node.lang !== 'mermaid' || !parent || index === undefined) return;

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'Mermaid',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'code', value: node.value },
          { type: 'mdxJsxAttribute', name: 'title', value: 'Architecture diagram' },
        ],
        children: [],
      };
    });
  };
}
