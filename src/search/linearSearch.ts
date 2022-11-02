/**
 * Performs a linear search of a number over an array of numbers.
 * @param { number[] } haystack - The list of numbers in which to search for the needle
 * @param { number } needle - The number to be searched
 * @returns { boolean } A flag which indicates whether or not the needle has been found
 */
export function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}
