/**
 * The node of a singly linked list
 * @template T The type of value stored inside the node
 */
export interface SinglyLinkedListNode<T> {
  /**
   * The node value
   */
  value: T;

  /**
   * A pointer to the next node in the list. It's undefined if there isn't a next node in the list (e.g.: current node is the tail).
   */
  next?: SinglyLinkedListNode<T>;
}

/**
 * The node for a doubly linked list.
 * @template T The type of value stored inside the node
 */
export interface DoublyLinkedListNode<T> {
  /**
   * The node value
   */
  value: T;

  /**
   * A pointer to the next node in the list. It's undefined if there isn't a next node in the list (e.g.: current node is the tail).
   */
  next?: DoublyLinkedListNode<T>;

  /**
   * A pointer to the previous node in the list. It's undefined if there isn't a previous node in the list (e.g.: current node is the head).
   */
  previous?: DoublyLinkedListNode<T>;
}

/**
 * Represents a point in a two-dimensional coordinate system
 */
export interface Point {
  /**
   * The x coordinate value
   */
  x: number;

  /**
   * The y coordinate value
   */
  y: number;
}

/**
 * The node for a binary tree
 */
export interface BinaryTreeNode<T> {
  /**
   * The node value
   */
  value: T;

  /**
   * The left child of the node
   */
  left: BinaryTreeNode<T> | null;

  /**
   * The right child of the node
   */
  right: BinaryTreeNode<T> | null;
}
