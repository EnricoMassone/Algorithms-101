import { DoublyLinkedListNode } from "../types";

function createNode<T>(value: T): DoublyLinkedListNode<T> {
  return { value: value };
}

/**
 * This is an implementation of a LRU cache.
 * LRU stands for Least Recently Used.
 * In this cache, when the cache capacity is exceeded, the least recently used value is evicted from the cache.
 */
export class LruCache<TKey, TValue> {
  private readonly capacity: number;
  private readonly nodeLookup: Map<TKey, DoublyLinkedListNode<TValue>>;
  private readonly keyLookup: Map<DoublyLinkedListNode<TValue>, TKey>;

  private length: number;
  private head?: DoublyLinkedListNode<TValue>;
  private tail?: DoublyLinkedListNode<TValue>;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new RangeError(
        `The value ${capacity} is invalid for the cache capacity. The cache capacity must be a positive integer number`,
      );
    }

    this.capacity = capacity;
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
    this.nodeLookup = new Map<TKey, DoublyLinkedListNode<TValue>>();
    this.keyLookup = new Map<DoublyLinkedListNode<TValue>, TKey>();
  }

  public get(key: TKey): TValue | undefined {
    const node = this.nodeLookup.get(key);
    if (!node) {
      // the cache doesn't contain the key, so return undefined
      return undefined;
    }

    // move the cached value to the head of the cache, since it is the most recently used value
    this.detach(node);
    this.prepend(node);

    // return the cached value
    return node.value;
  }

  public set(key: TKey, value: TValue): void {
    const node = this.nodeLookup.get(key);
    if (!node) {
      // the key does not exist in the cache, so add it to the cache
      const node = createNode(value);
      this.prepend(node);
      this.length++;

      // add the new node to the lookups
      this.nodeLookup.set(key, node);
      this.keyLookup.set(node, key);

      // remove the least recently used item from the cache if the cache capacity has been exceeded
      this.trimCache();
    } else {
      /*
       * The key exists in the cache. I need to move it to the head of the cache, since it is the
       *  most recently used value and I also have to update its value.
       */

      this.detach(node);
      this.prepend(node);

      node.value = value;
    }
  }

  private detach(node: DoublyLinkedListNode<TValue>): void {
    if (node.previous) {
      node.previous.next = node.next;
    }

    if (node.next) {
      node.next.previous = node.previous;
    }

    if (this.length === 1) {
      // I'm removing the only node existing inside the doubly linked list
      this.head = undefined;
      this.tail = undefined;
    } else if (this.head === node) {
      // I'm removing the head of the doubly linked list
      this.head = this.head.next;
    } else if (this.tail === node) {
      // I'm removing the tail of the doubly linked list
      this.tail = this.tail.previous;
    }

    node.next = undefined;
    node.previous = undefined;
  }

  private prepend(node: DoublyLinkedListNode<TValue>): void {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail as DoublyLinkedListNode<TValue>;
    this.tail = tail.previous;
    tail.previous = undefined;

    if (this.tail) {
      this.tail.next = undefined;
    }

    const key = this.keyLookup.get(tail) as TKey;

    this.keyLookup.delete(tail);
    this.nodeLookup.delete(key);

    this.length--;
  }
}
