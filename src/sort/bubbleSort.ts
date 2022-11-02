/**
 * Sorts the provided array in place, by applying the bubble sort algorithm.
 * @param { number[] } items - The array to be sorted
 */
export function bubbleSort(items: number[]): void {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - 1 - i; j++) {
      if (items[j] > items[j + 1]) {
        const temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }
}
