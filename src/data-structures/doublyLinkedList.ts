import { DoublyLinkedListNode } from "../types";

/**
 * Doubly linked list data structure
 * @template T The type of items in the list
 */
class DoublyLinkedList<T> {
  private _length: number;
  private _head: DoublyLinkedListNode<T> | undefined;
  private _tail: DoublyLinkedListNode<T> | undefined;

  /**
   * Creates an empty doubly linked list
   */
  constructor() {
    this._length = 0;
    this._head = undefined;
    this._tail = undefined;
  }

  public get length(): number {
    return this._length;
  }

  public append(item: T): void {
    this._length++;
    const node: DoublyLinkedListNode<T> = { value: item };

    if (!this._tail) {
      // the list is currently empty
      this._tail = node;
      this._head = node;
      return;
    }

    // link the current tail with the newly created node
    this._tail.next = node;
    node.previous = this._tail;

    // make the newly created node the list tail
    this._tail = node;
  }

  public prepend(item: T): void {
    this._length++;
    const node: DoublyLinkedListNode<T> = { value: item };

    if (!this._head) {
      // the list is currently empty
      this._tail = node;
      this._head = node;
      return;
    }

    // link the current head with the newly created node
    this._head.previous = node;
    node.next = this._head;

    // make the newly created node the list head
    this._head = node;
  }

  public get(index: number): T | undefined {
    const node = this.getNodeAt(index);
    return node?.value;
  }

  public insertAt(item: T, index: number): void {
    if (index < 0 || index > this._length) {
      throw new RangeError(
        `The provided index (${index}) is outside of the list boundaries. Cannot insert at this index.`,
      );
    }

    if (index === 0) {
      // I'm inserting at the beginning of the list => so call prepend
      this.prepend(item);
      return;
    }

    if (index === this._length) {
      // I'm inserting at the end of the list => so call append
      this.append(item);
      return;
    }

    // I'm inserting somewhere in the middle of the list
    this._length++;
    const newNode: DoublyLinkedListNode<T> = { value: item };
    const currentNode = this.getNodeAt(index);

    if (!currentNode) {
      // We have already checked for edge cases, so if we get here it means we messed up our list
      throw new Error(
        `There is no node at index ${index}. We expect a node to be there. The list internal structure is broken.`,
      );
    }

    // insert the new node inside the list
    newNode.next = currentNode;
    newNode.previous = currentNode.previous;

    // link the current node with the new node
    currentNode.previous = newNode;

    // link the node before the newly inserted node with the newly inserted node
    if (!newNode.previous) {
      // We have already checked for edge cases, so if we get here it means we messed up our list
      throw new Error("The list internal structure is broken");
    }

    newNode.previous.next = newNode;
  }

  public removeAt(index: number): T | undefined {
    const node = this.getNodeAt(index);
    if (!node) {
      // there is no node to remove, so I return undefined
      return undefined;
    }

    // there is an actual node to be removed
    return this.removeNode(node);
  }

  public remove(item: T): T | undefined {
    let current = this._head;

    while (current) {
      if (current.value === item) {
        // I found the node to be removed
        break;
      }

      // move to the next node and repeat the check
      current = current.next;
    }

    if (!current) {
      // I didn't find the node to be removed
      return undefined;
    }

    // I found the node to be removed
    return this.removeNode(current);
  }

  private getNodeAt(index: number): DoublyLinkedListNode<T> | undefined {
    if (index < 0) {
      return undefined;
    }

    // start walking the list (node by node) from the head
    let current = this._head;

    /*
     * To keep the item at the index we need to do make a number of steps equal to the index itself.
     * Example: to keep the item at index 0 (the head) we need to do 0 steps (because we start at the head)
     * Example: to keep the item at index 1 we need to do just 1 step (move from the head to the next node)
     * Example: to keep the item at index 1 we need to do 2 steps (move from the head to the next node and then to the next node again)
     * Before doing yet another step we also need to check whether we are at an actual node or we fell outside of the list boundaries
     */

    const numberOfSteps = index;

    for (let i = 1; i <= numberOfSteps && current; i++) {
      current = current.next;
    }

    return current;
  }

  private removeNode(node: DoublyLinkedListNode<T>): T {
    this._length--;

    // takes a reference to the previous node and the next node
    const previousNode = node.previous;
    const nextNode = node.next;

    // unlink the node to be removed from the previous and the next node
    node.previous = undefined;
    node.next = undefined;

    if (previousNode) {
      // link the previous node to the next node
      previousNode.next = nextNode;
    }

    if (nextNode) {
      // link the next node to the previous node
      nextNode.previous = previousNode;
    }

    // if the removed node is the head, then reassign the head to the next node
    if (node === this._head) {
      this._head = nextNode;
    }

    // if the removed node is the tail, then reassign the tail to the previous node
    if (node === this._tail) {
      this._tail = previousNode;
    }

    return node.value;
  }
}

export default DoublyLinkedList;
