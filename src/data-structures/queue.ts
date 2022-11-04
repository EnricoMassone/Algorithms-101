import { SinglyLinkedListNode } from "../types";

/**
 * Queue data structure
 * @template T The type of items in the queue.
 */
class Queue<T> {
  private _length: number;
  private _head: SinglyLinkedListNode<T> | undefined;
  private _tail: SinglyLinkedListNode<T> | undefined;

  /**
   * Creates an empty queue
   */
  constructor() {
    this._length = 0;
    this._head = undefined;
    this._tail = undefined;
  }

  /**
   * Gets the number of items in the queue
   * @return {number} The number of items currently in the queue
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Adds an item at the end of the queue
   * @param {T} item - The item to be added at the end of the queue
   */
  public enqueue(item: T): void {
    const node: SinglyLinkedListNode<T> = { value: item, next: undefined };
    this._length++;

    if (!this._tail) {
      // the queue is currently empty, so I'm adding the very first element
      this._head = node;
      this._tail = node;
      return;
    }

    this._tail.next = node;
    this._tail = node;
  }

  /**
   * Removes the first item from the beginning of the queue.
   * Calling this method modifies the queue, by actually removing the first item from the queue.
   * @return {T | undefined} The first item in the queue or undefined if the queue is empty
   */
  public dequeue(): T | undefined {
    if (!this._head) {
      // returns undefined if the queue is empty
      return undefined;
    }

    this._length--;

    // save a reference to the current head
    const head = this._head;
    this._head = this._head.next;

    if (this._length === 0) {
      // if I have removed the only item in the queue I need to set tail to undefined, because now queue is empty
      this._tail = undefined;
    }

    // breaking the next link of the removed queue item is not mandatory, I do this step just for consistency
    head.next = undefined;

    return head.value;
  }

  /**
   * Returns the first item from the beginning of the queue, without modifying the queue.
   * Calling this method does not modify the queue: the first item in the queue is not removed from the queue.
   * @return {T | undefined} The first item in the queue or undefined if the queue is empty
   */
  public peek(): T | undefined {
    return this._head?.value;
  }
}

export default Queue;
