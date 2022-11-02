/**
 * Performs a binary search of a number over a sorted array of numbers.
 * @param { number[] } haystack - The sorted list of numbers in which to search for the needle
 * @param { number } needle - The number to be searched
 * @returns { boolean } A flag which indicates whether or not the needle has been found
 */
export function binarySearch(haystack: number[], needle: number): boolean {
  // lower is incluse and high is exclusive
  let lower = 0;
  let high = haystack.length;

  while (lower < high) {
    const middleIndex = Math.floor(lower + (high - lower) / 2);
    const middleValue = haystack[middleIndex];

    if (needle < middleValue) {
      // go left
      high = middleIndex;
    } else if (needle > middleValue) {
      // go right
      lower = middleIndex + 1;
    } else {
      // found
      return true;
    }
  }

  return false;
}
