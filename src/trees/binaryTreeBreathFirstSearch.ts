import { BinaryTreeNode } from "../types";
import Queue from "../data-structures/queue";

/**
 * Implements a breath first search of a value over a binary tree.
 * @param root - The tree root.
 * @param needle - The value to be searched for.
 * @returns { boolean } A boolean value which indicates whether or not the searched value has been found.
 * @template T The type of values contained in the tree nodes.
 */
function search<T>(root: BinaryTreeNode<T>, needle: T): boolean {
  const queue = new Queue<BinaryTreeNode<T>>();
  queue.enqueue(root);

  while (queue.length > 0) {
    // dequeue the first item from the queue
    const current = queue.dequeue() as BinaryTreeNode<T>;

    // check if the value of the current node is the needle we are searching for
    if (current.value === needle) {
      // found
      return true;
    }

    // needle not found, so keep searching
    if (current.left) {
      // add the left child of the current node to the queue
      queue.enqueue(current.left);
    }

    if (current.right) {
      // add the right child of the current node to the queue
      queue.enqueue(current.right);
    }
  }

  // needle not found
  return false;
}

export default search;
