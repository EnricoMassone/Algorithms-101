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
