import { swap } from "../helpers";

/**
 * Sorts the provided array in place, by applying the bubble sort algorithm.
 * @param { number[] } items - The array to be sorted
 */
function sort(items: number[]): void {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - 1 - i; j++) {
      if (items[j] > items[j + 1]) {
        swap(items, j, j + 1);
      }
    }
  }
}

export default sort;
