import { BinaryTreeNode } from "../types";

function walk<T>(current: BinaryTreeNode<T> | null, path: T[]): void {
  if (!current) {
    // this is the base case: we can't go further, because we jumped off the tree
    return;
  }

  /*
   * This is the recursive case.
   * Since this is a postorder traversal we need to traverse the left subtree
   * (first recursive call), then traverse the right subtree (second recursive call)
   * and finally process the current node.
   */
  walk(current.left, path);
  walk(current.right, path);
  path.push(current.value);
}

/**
 * Implements a depth-first postorder tree traversal of a binary tree.
 * @param { BinaryTreeNode<T> } root - The tree root.
 * @returns { T[] } The array containing the tree nodes values.
 * @template T The type of values contained in the tree nodes.
 */
function traverse<T>(root: BinaryTreeNode<T>): T[] {
  const path: T[] = [];
  walk(root, path);
  return path;
}

export default traverse;
