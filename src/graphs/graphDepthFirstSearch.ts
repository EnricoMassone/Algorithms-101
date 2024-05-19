import { WeightedAdjacencyList } from "../types";

function walk(
  graph: WeightedAdjacencyList,
  current: number,
  needle: number,
  seen: boolean[],
  path: number[],
): boolean {
  if (seen[current]) {
    // we have already seen the current vertex
    return false;
  }

  // mark current vertex as seen and add it to the path
  seen[current] = true;
  path.push(current);

  if (current === needle) {
    // we reached the needle
    return true;
  }

  // check all vertices adjacent to the current one
  const adjacentVertices = graph[current];

  for (let i = 0; i < adjacentVertices.length; i++) {
    const vertex = adjacentVertices[i].to;

    if (walk(graph, vertex, needle, seen, path)) {
      // by depth-first walking the graph from vertex, we were able to reach the needle
      return true;
    }
  }

  // there is no way to reach the needle by depth-first walking the graph from current
  path.pop();
  return false;
}

/**
 * Implements depth first search over a given graph.
 * @param { WeightedAdjacencyList } graph - The graph on which the depth first search is performed
 * @param { number } source - The vertex from which the searching process is started. This is the starting vertex of the path built by the function.
 * @param { number } needle - The vertex to be searched by the algorithm. This is the ending vertex of the path built by the function.
 * @returns { number[] } The path from source to needle. If a path exists then a non-empty array is returned with source as the first item and needle as the last item. Otherwise, an empty array is returned.
 */
export function search(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] {
  ensureValidVertex(source, graph);
  ensureValidVertex(needle, graph);

  if (source === needle) {
    return [source];
  }

  const numberOfVertices = graph.length;
  const seen: boolean[] = new Array<boolean>(numberOfVertices).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  return path;
}

function ensureValidVertex(vertex: number, graph: WeightedAdjacencyList): void {
  const numberOfVertices = graph.length;

  if (vertex < 0 || vertex >= numberOfVertices) {
    throw new RangeError(
      `The value ${vertex} is invalid for a vertex in the provided graph. Allowed vertex values are from 0 to ${
        numberOfVertices - 1
      }`,
    );
  }
}
