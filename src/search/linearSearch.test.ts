import { search } from "./linearSearch";

test("Linear search", () => {
  const haystack = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(search(haystack, 69)).toEqual(true);
  expect(search(haystack, 1336)).toEqual(false);
  expect(search(haystack, 69420)).toEqual(true);
  expect(search(haystack, 69421)).toEqual(false);
  expect(search(haystack, 1)).toEqual(true);
  expect(search(haystack, 0)).toEqual(false);
});
