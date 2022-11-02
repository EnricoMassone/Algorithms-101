import { linearSearch } from "./linearSearch";

test("Linear search", () => {
  const haystack = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(linearSearch(haystack, 69)).toEqual(true);
  expect(linearSearch(haystack, 1336)).toEqual(false);
  expect(linearSearch(haystack, 69420)).toEqual(true);
  expect(linearSearch(haystack, 69421)).toEqual(false);
  expect(linearSearch(haystack, 1)).toEqual(true);
  expect(linearSearch(haystack, 0)).toEqual(false);
});
