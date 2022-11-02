import { bubbleSort } from "./bubbleSort";

describe("Bubble sort", () => {
  test("Sorts empty array with no errors", () => {
    const items = [] as number[];
    bubbleSort(items);
    expect(items).toEqual([]);
  });

  test("Sorts non empty array", () => {
    const items = [9, 3, 7, 4, 69, 420, 42];
    bubbleSort(items);
    expect(items).toEqual([3, 4, 7, 9, 42, 69, 420]);
  });
});
