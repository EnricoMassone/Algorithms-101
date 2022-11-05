import { SinglyLinkedListNode } from "../types";

/**
 * Stack data structure
 * @template T The type of items in the stack.
 */
class Stack<T> {
  private _length: number;
  private _head: SinglyLinkedListNode<T> | undefined;

  /**
   * Creates an empty stack
   */
  constructor() {
    this._length = 0;
    this._head = undefined;
  }

  /**
   * Gets the number of items in the stack
   * @return {number} The number of items currently in the stack
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Adds an item at the top of the stack
   * @param {T} item - The item to be added at the top of the stack
   */
  public push(item: T): void {
    const node: SinglyLinkedListNode<T> = { value: item, next: undefined };
    this._length++;

    if (!this._head) {
      // the stack is currently empty, so I just need to set the head and I'm done
      this._head = node;
      return;
    }

    // adds the newly created node at the top of the stack
    node.next = this._head;
    this._head = node;
  }

  /**
   * Removes the item at the top of the stack.
   * Calling this method modifies the stack, by actually removing the item at the top of the stack.
   * @return {T | undefined} The item at the top of the stack or undefined if the stack is empty
   */
  public pop(): T | undefined {
    if (!this._head) {
      // the stack is currently empty, so I return undefined
      return undefined;
    }

    this._length--;

    // save a reference to the current head
    const head = this._head;
    this._head = this._head.next;

    // breaking the next link of the removed item is not mandatory, I do this step just for consistency
    head.next = undefined;
    return head.value;
  }

  /**
   * Returns the item at the top of the stack, without modifying the stack.
   * Calling this method does not modify the stack: the item at the top of the stack is not removed from the stack.
   * @return {T | undefined} The item at the top of the stack or undefined if the stack is empty
   */
  public peek(): T | undefined {
    return this._head?.value;
  }
}

export default Stack;
