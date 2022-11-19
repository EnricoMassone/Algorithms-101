import { BinaryTreeNode } from "../types";

function walk<T>(current: BinaryTreeNode<T> | null, path: T[]): void {
  if (!current) {
    // this is the base case: we can't go further, because we jumped off the tree
    return;
  }

  /*
   * This is the recursive case.
   * Since this is a preorder traversal we need to process the current node, then traverse the left subtree
   * (first recursive call) and finally traverse the right subtree (second recursive call).
   */
  path.push(current.value);
  walk(current.left, path);
  walk(current.right, path);
}

/**
 * Implements a depth-first preorder tree traversal of a binary tree.
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
