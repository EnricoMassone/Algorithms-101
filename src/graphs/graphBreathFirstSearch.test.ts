import { WeightedAdjacencyMatrix } from "../types";
import { search } from "./graphBreathFirstSearch";

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
const matrix: WeightedAdjacencyMatrix = [
  [0, 3, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 5, 0, 2, 0],
  [0, 0, 18, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1],
];

describe("Breath first search on a graph", () => {
  test("It is able to find the path from source to needle when at least one path exists", () => {
    expect(search(matrix, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  });

  test("Returns empty array when no path exists from source to needle.", () => {
    expect(search(matrix, 6, 0)).toEqual([]);
  });

  test("Returns array with one item when source and needle are the same vertex.", () => {
    expect(search(matrix, 6, 6)).toEqual([6]);
  });
});
