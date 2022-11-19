import { BinaryTreeNode } from "../types";

function walk<T>(current: BinaryTreeNode<T> | null, path: T[]): void {
  if (!current) {
    // this is the base case: we can't go further, because we jumped off the tree
    return;
  }

  /*
   * This is the recursive case.
   * Since this is a preorder traversal we need to explore the current node, then explore the left subtree
   * (recursive call) and finally explore the right subtree (recursive call).
   */
  path.push(current.value);
  walk(current.left, path);
  walk(current.right, path);
}

function traverse<T>(root: BinaryTreeNode<T>): T[] {
  const path: T[] = [];
  walk(root, path);
  return path;
}

export default traverse;
