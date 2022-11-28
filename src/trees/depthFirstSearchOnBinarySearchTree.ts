import { BinaryTreeNode } from "../types";

function walk<T>(current: BinaryTreeNode<T> | null, needle: T): boolean {
  // base case
  if (!current) {
    // I can't proceed further because I jumped off the tree
    return false;
  }

  if (current.value === needle) {
    // I found the value I'm looking for
    return true;
  }

  // recursive case
  if (current.value < needle) {
    // go right
    return walk(current.right, needle);
  }

  // go left
  return walk(current.left, needle);
}

/**
 * Implements a depth first search on a given binary search tree.
 * @param { BinaryTreeNode<T> } root - The root of the binary search tree
 * @param { T } needle - The value to be searched in the binary search tree
 * @returns { boolean } A flag indicating whether or not the searched value has been found
 * @template T The type of values contained in the tree nodes
 */
function search<T>(root: BinaryTreeNode<T>, needle: T): boolean {
  return walk(root, needle);
}

export default search;
