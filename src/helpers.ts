/**
 * Swaps two array items in place
 * @param {T[]} items - The array containing the items to be swapped
 * @param { number } i - The array index of the first item
 * @param { number } j - The array index of the second item
 * @throws { RangeError } Will throw an error if either i or j are outside the array boundaries
 * @template T The type of items in the provided array.
 */
export function swap<T>(items: T[], i: number, j: number): void {
  if (!isIndexInArrayBoundaries(i, items)) {
    throw new RangeError(
      "Index i is outside the boundaries of the provided array",
    );
  }

  if (!isIndexInArrayBoundaries(j, items)) {
    throw new RangeError(
      "Index j is outside the boundaries of the provided array",
    );
  }

  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

function isIndexInArrayBoundaries<T>(index: number, items: T[]): boolean {
  return index >= 0 && index < items.length;
}

export function ensureValidVertex(
  vertex: number,
  graph: WeightedAdjacencyMatrix,
): void {
  const numberOfVertices = graph.length;

  if (vertex < 0 || vertex >= numberOfVertices) {
    throw new RangeError(
      `The value ${vertex} is invalid for a vertex in the provided graph. Allowed vertex values are from 0 to ${
        numberOfVertices - 1
      }`,
    );
  }
}
