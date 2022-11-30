import { swap } from "../helpers";

interface Child {
  index: number;
  value: number;
}

/**
 * Min Heap data structure
 */
class MinHeap {
  private _length: number;
  private readonly _data: number[];

  /**
   * Creates an empty min heap
   */
  constructor() {
    this._length = 0;
    this._data = [];
  }

  /**
   * Gets the number of items in the heap
   * @return {number} The number of items currently in the heap
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Adds a new item to the heap
   * @param { number } item - The item to be added to the heap
   */
  public insert(item: number): void {
    // put the item at the end of the heap
    this._data[this._length] = item;
    // increment the length, since we added an item
    this._length++;
    // heapify up the inserted item (until it will reach the right position in the heap)
    this.heapifyUp(this._length - 1);
  }

  /**
   * Deletes the root item of the heap (which is the minimum item in the heap)
   * @return {number | undefined} The root item of the heap or undefined if the heap is empty
   */
  public delete(): number | undefined {
    if (this._length === 0) {
      // the heap is empty, so I return undefined
      return undefined;
    }

    // the deleted value is always the value of the root node
    const deletedValue = this._data[0];

    if (this._length === 1) {
      // in this case the heap only has the root node, so I only need to decrement the lenght (no need to heapify down)
      this._length--;
      return deletedValue;
    }

    const lastItemValue = this._data[this._length - 1];
    // set the value of the root node equal to the value of the last item in the heap
    this._data[0] = lastItemValue;
    // decrement the length of the heap
    this._length--;
    // heapify down the value inserted at the root of the heap, until the right position in the heap is reached
    this.heapifyDown(0);

    return deletedValue;
  }

  private heapifyUp(index: number): void {
    // base case: we are at index 0, so we reached the root and we can't heapify up more
    if (index === 0) {
      return;
    }

    const parentIndex = MinHeap.getParentIndex(index);
    const parentValue = this._data[parentIndex];
    const value = this._data[index];

    if (parentValue <= value) {
      // this is another base case, because the parent value is less than or equal to the current value. We must stop here.
      return;
    }

    // recursive case: the parent value is greater than the current value. I need to swap the current node with its parent
    // and keep on doing heapify up (until I hit one of the base cases)
    swap(this._data, index, parentIndex);
    this.heapifyUp(parentIndex);
  }

  private heapifyDown(index: number): void {
    if (index >= this._length - 1) {
      /*
       * I'm either at the last valid position (this._length - 1) or out of boundaries.
       * In both cases I can't heapify down more than this, so I need to stop.
       */
      return;
    }

    const leftChildIndex = MinHeap.getLeftChildIndex(index);
    if (leftChildIndex >= this._length) {
      /*
       * Base case: the left child is out of boundaries, so both the children are out of boundaries
       * (because an heap is a complete binary tree, so the left child always has an index smaller than the index of the right child)
       */
      return;
    }

    const leftChildValue = this._data[leftChildIndex];

    const children: Child[] = [
      { index: leftChildIndex, value: leftChildValue },
    ];

    const rightChildIndex = MinHeap.getRightChildIndex(index);
    if (rightChildIndex <= this._length - 1) {
      // in this case the right child is inside the boundaries of the heap
      const rightChildValue = this._data[rightChildIndex];
      children.push({ index: rightChildIndex, value: rightChildValue });
    }

    let minimumChildren = children[0];
    if (children[1] && children[1].value < minimumChildren.value) {
      minimumChildren = children[1];
    }

    const value = this._data[index];
    const valueOfMinimumChildren = minimumChildren.value;
    const indexOfMinimumChildren = minimumChildren.index;

    if (value <= valueOfMinimumChildren) {
      // base case: I'm done with the heapify down process, because the current node is smaller of both children nodes
      return;
    }

    // I need to swap the current node with the smaller of its children nodes and keep on doing heapify down
    // (until I'll hit one of the base cases)
    swap(this._data, index, indexOfMinimumChildren);
    this.heapifyDown(indexOfMinimumChildren);
  }

  private static getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private static getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private static getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }
}

export default MinHeap;
