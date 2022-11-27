import { BinaryTreeNode } from "../types";
import Queue from "../data-structures/queue";

/**
 * Implements a breath-first traversal of a binary tree.
 * @param root - The tree root.
 * @returns { T[] } The array containing the tree nodes values.
 * @template T The type of values contained in the tree nodes.
 */
function traverse<T>(root: BinaryTreeNode<T>): T[] {
  const path: T[] = [];

  const queue = new Queue<BinaryTreeNode<T>>();
  queue.enqueue(root);

  while (queue.length > 0) {
    // dequeue the first item from the queue
    const current = queue.dequeue() as BinaryTreeNode<T>;

    // process the current item
    path.push(current.value);

    // if there is a left child of the current item, the enqueue it
    if (current.left) {
      queue.enqueue(current.left);
    }

    // if there is a right child of the current item, the enqueue it
    if (current.right) {
      queue.enqueue(current.right);
    }
  }

  return path;
}

export default traverse;
