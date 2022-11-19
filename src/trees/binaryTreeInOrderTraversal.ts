import { BinaryTreeNode } from "../types";

function walk<T>(current: BinaryTreeNode<T> | null, path: T[]): void {
  if (!current) {
    // this is the base case: we can't go further, because we jumped off the tree
    return;
  }

  /*
   * This is the recursive case.
   * Since this is an inorder tree traversal we need to do the following steps:
   * 1) traverse the left subtree (first recursive call)
   * 2) process the current node
   * 3) traverse the right subtree (second recursive call)
   */
  walk(current.left, path);
  path.push(current.value);
  walk(current.right, path);
}

/**
 * Implements a depth-first inorder tree traversal of a binary tree.
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
