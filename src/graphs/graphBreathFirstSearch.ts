import { WeightedAdjacencyMatrix } from "../types";

const NO_PREVIOUS_VERTEX = -1;

/**
 * Implements breath first search over a given graph.
 * @param { WeightedAdjacencyMatrix } graph - The graph on which the breath first search is performed
 * @param { number } source - The vertex from which the searching process is started. This is the starting vertex of the path built by the function.
 * @param { number } needle - The vertex to be search by the algorithm. This is the ending vertex of the path built by the function.
 * @returns { number[] } The path from source to needle. If a path exists then a non-empty array is returned with source as the first item and needle as the last item. Otherwise, an empty array is returned.
 */
export function search(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] {
  ensureValidVertex(source, graph);
  ensureValidVertex(needle, graph);

  if (source === needle) {
    return [source];
  }

  const numberOfVertices = graph.length;

  const seen: boolean[] = new Array<boolean>(numberOfVertices).fill(false);
  const previous: number[] = new Array<number>(numberOfVertices).fill(
    NO_PREVIOUS_VERTEX
  );

  const queue: number[] = [source];

  while (queue.length > 0) {
    const currentVertex = queue.shift() as number;

    // mark the current vertex as visited
    seen[currentVertex] = true;

    if (currentVertex === needle) {
      // we have found the needle, so we can exit the searching process
      break;
    }

    // we didn't find the needle, so we need to keep searching by using breath first search

    const graphVertices = graph[currentVertex];

    for (let i = 0; i < graphVertices.length; i++) {
      const edgeExists = graphVertices[i] > 0;

      if (!edgeExists) {
        // there is no edge connecting the current vertex with the i vertex
        continue;
      }

      if (seen[i]) {
        // I have already visited vertex i, so I can skip it
        continue;
      }

      // I didn't previously visited the vertex i, so I add it to the queue and I mark current vertex as its predecessor in the path
      queue.push(i);
      previous[i] = currentVertex;
    }
  }

  // check if we were able to find a path from source to needle
  if (previous[needle] === NO_PREVIOUS_VERTEX) {
    // we were not able to find a path from source to needle
    return [];
  }

  /*
   * We found a path from source to needle
   * Now we need to walk along the path from source to needle backward, by starting from needle.
   */
  let currentVertex = needle;
  const path: number[] = [currentVertex];

  while (previous[currentVertex] !== NO_PREVIOUS_VERTEX) {
    currentVertex = previous[currentVertex];
    path.push(currentVertex);
  }

  return path.reverse();
}

function ensureValidVertex(
  vertex: number,
  graph: WeightedAdjacencyMatrix
): void {
  const numberOfVertices = graph.length;

  if (vertex < 0 || vertex >= numberOfVertices) {
    throw new RangeError(
      `The value ${vertex} is invalid for a vertex in the provided graph. Allowed vertex values are from 0 to ${
        numberOfVertices - 1
      }`
    );
  }
}
