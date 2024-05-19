import { WeightedAdjacencyList } from "../types";
import { search } from "./graphDepthFirstSearch";

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

const graph: WeightedAdjacencyList = [];
graph[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
graph[1] = [{ to: 4, weight: 1 }];
graph[2] = [{ to: 3, weight: 7 }];
graph[3] = [];
graph[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
graph[5] = [
  { to: 2, weight: 18 },
  { to: 6, weight: 1 },
];
graph[6] = [{ to: 3, weight: 1 }];

describe("Depth first search on a graph", () => {
  test("It is able to find the path from source to needle when at least one path exists", () => {
    expect(search(graph, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  });

  test("Returns empty array when no path exists from source to needle.", () => {
    expect(search(graph, 6, 0)).toEqual([]);
  });

  test("Returns array with one item when source and needle are the same vertex.", () => {
    expect(search(graph, 6, 6)).toEqual([6]);
  });
});
