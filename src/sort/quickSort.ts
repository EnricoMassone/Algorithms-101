import { swap } from "../helpers";

function partition(
  items: number[],
  lowIndex: number,
  highIndex: number
): number {
  // both lowIndex and highIndex are inclusive
  const pivot = items[highIndex];

  let index = lowIndex;

  for (let i = lowIndex; i <= highIndex - 1; i++) {
    if (items[i] <= pivot) {
      // Found an array item less than or equal to the pivot value
      // This item must be placed at the left of the pivot
      swap(items, index, i);
      index++;
    }
  }

  // put the pivot in the right place
  swap(items, index, highIndex);

  // return the pivot place
  return index;
}

function sortSubArray(
  items: number[],
  lowIndex: number,
  highIndex: number
): void {
  // base case is sorting an empty array or an array of length 1
  if (lowIndex >= highIndex) {
    return; // in the base case the array is already sorted
  }

  // recursive case
  const pivotIndex = partition(items, lowIndex, highIndex);

  // sort the sub array before the pivot
  sortSubArray(items, lowIndex, pivotIndex - 1);

  // sort the sub array after the pivot
  sortSubArray(items, pivotIndex + 1, highIndex);
}

/**
 * Sorts the provided array in place, by applying the quick sort algorithm.
 * @param { number[] } items - The array to be sorted
 */
function quickSort(items: number[]): void {
  const lowIndex = 0;
  const highIndex = items.length - 1;
  sortSubArray(items, lowIndex, highIndex);
}

export default quickSort;
