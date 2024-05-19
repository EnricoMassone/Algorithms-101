import { WeightedAdjacencyList } from "../types";

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
  throw new Error();
}
