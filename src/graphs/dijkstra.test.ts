import { WeightedAdjacencyList } from "../types";
import { searchShortestPath } from "./dijkstra";

const testGraph: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)

testGraph[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
testGraph[1] = [
  { to: 0, weight: 3 },
  { to: 2, weight: 4 },
  { to: 4, weight: 1 },
];
testGraph[2] = [
  { to: 1, weight: 4 },
  { to: 3, weight: 7 },
  { to: 0, weight: 1 },
];
testGraph[3] = [
  { to: 2, weight: 7 },
  { to: 4, weight: 5 },
  { to: 6, weight: 1 },
];
testGraph[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
testGraph[5] = [
  { to: 6, weight: 1 },
  { to: 4, weight: 2 },
  { to: 2, weight: 18 },
];
testGraph[6] = [
  { to: 3, weight: 1 },
  { to: 5, weight: 1 },
];

describe("Dijkstra algorithm on a graph", () => {
  test("It is able to find the shortest path between a source and a needle", () => {
    // ARRANGE
    const source: number = 0;
    const needle: number = 6;

    // ACT
    const result = searchShortestPath(source, needle, testGraph);

    // ASSERT
    expect(result).toEqual([0, 1, 4, 5, 6]);
  });
});
