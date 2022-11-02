import { binarySearch } from "./binarySearch";

test("Binary search", () => {
  const haystack = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(binarySearch(haystack, 69)).toEqual(true);
  expect(binarySearch(haystack, 1336)).toEqual(false);
  expect(binarySearch(haystack, 69420)).toEqual(true);
  expect(binarySearch(haystack, 69421)).toEqual(false);
  expect(binarySearch(haystack, 1)).toEqual(true);
  expect(binarySearch(haystack, 0)).toEqual(false);
});
