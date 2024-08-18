import { WeightedAdjacencyList } from "../types";

const NO_VERTEX = -1;

/**
 * Searches the shortest path from source to needle, by using the Dijkstra algorithm.
 * @param {number} source - The source vertex of the path.
 * @param {number} needle - The terminal vertex of the path.
 * @param  { WeightedAdjacencyList } graph - The graph on which the shortest path from source to needle is searched.
 * @returns { number[] } The shortest possible path from source to needle.
 */
export function searchShortestPath(
  source: number,
  needle: number,
  graph: WeightedAdjacencyList,
): number[] {
  ensureValidVertex(source, graph);
  ensureValidVertex(needle, graph);

  // create helper data structures
  const distances = new Array<number>(graph.length).fill(Infinity);
  const previousVertex = new Array<number>(graph.length).fill(NO_VERTEX);
  const foundMinimumDistance = new Array<boolean>(graph.length).fill(false);

  // initialize helper data structures
  distances[source] = 0; // distance between source and itself is always 0

  while (
    existsReachableVertexWithUnknownMinimumDistance(
      distances,
      foundMinimumDistance,
    )
  ) {
    const current = getClosestReachableVertexWithUnknownMinimumDistance(
      distances,
      foundMinimumDistance,
    );

    /*
     * For the current vertex, we found its minimum distance from the source.
     * We do know that it is reachable from the source and among the nodes which are reachable from source it is the closest one to the source.
     * This means that, there is no way to find a shortest from the source to the current node, because any other path would be longer than the known one.
     * Remember that the prerequisite to apply the Dijkstra algorith is that each edge has a NON negative weight.
     * Dijkstra algorith does NOT work with negative weights.
     */
    foundMinimumDistance[current] = true;

    /*
     * Check the edges originating from the current vertex.
     * The goal of the check is to see if it is possible to find a shortest path from the source for all the adjacent vertices.
     */
    const edges = graph[current];

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];

      if (foundMinimumDistance[edge.to]) {
        // for this adjacent vertex, the minimum distance from source is already known, so we can skip this one
        continue;
      }

      // compute the distance from source of the adjacent vertex
      const distance = distances[current] + edge.weight;

      if (distance < distances[edge.to]) {
        // we have found a shorter path to go from source to the adjacent vertex, so let's update the helper data structures.
        distances[edge.to] = distance;
        previousVertex[edge.to] = current;
      }
    }
  }

  // Check if there is a path to go from source to needle.
  if (previousVertex[needle] === NO_VERTEX) {
    // there is no path to go from source to needle, so return an empty array
    return [];
  }

  // There is a known path to go from source to needle. It is the shortest possible path for that route.
  const pathFromNeedleToSource: number[] = [];

  // Walk backward from needle to source
  let current = needle;

  while (previousVertex[current] !== NO_VERTEX) {
    pathFromNeedleToSource.push(current);
    current = previousVertex[current];
  }

  // add the source to the path (because the source has no previous vertex, so it has not been added to the path so far)
  pathFromNeedleToSource.push(source);

  // reverse the path, since we want to go from the source to the needle
  return pathFromNeedleToSource.reverse();
}

function existsReachableVertexWithUnknownMinimumDistance(
  distances: number[],
  foundMinimumDistance: boolean[],
): boolean {
  return foundMinimumDistance.some((value: boolean, index: number) => {
    const isMinimumDistanceUnknown = !value;
    const isReachable = distances[index] < Infinity;
    return isMinimumDistanceUnknown && isReachable;
  });
}

function getClosestReachableVertexWithUnknownMinimumDistance(
  distances: number[],
  foundMinimumDistance: boolean[],
): number {
  // define and intialize helper variables
  let closestVertextIndex = NO_VERTEX;
  let minimumKnownDistance: number = Infinity;

  for (let i = 0; i < foundMinimumDistance.length; i++) {
    if (foundMinimumDistance[i]) {
      // skip this vertex, because for this one the minimum distance from source is already known
      continue;
    }

    if (distances[i] == Infinity) {
      // skip this vertex, because this vertex is unreachable
      continue;
    }

    if (distances[i] < minimumKnownDistance) {
      /*
       * This is a reachable vertex, for which the minimum distance from source is still to be found.
       * Its distance from the source is less than the minimum known distance from the source for vertices of the same type.
       * So, I need to update my helper variables
       */
      closestVertextIndex = i;
      minimumKnownDistance = distances[i];
    }
  }

  return closestVertextIndex;
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
