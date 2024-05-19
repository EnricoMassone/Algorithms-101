/**
 * The node of a singly linked list
 * @template T The type of value stored inside the node
 */
export interface SinglyLinkedListNode<T> {
  /**
   * The node value
   */
  value: T;

  /**
   * A pointer to the next node in the list. It's undefined if there isn't a next node in the list (e.g.: current node is the tail).
   */
  next?: SinglyLinkedListNode<T>;
}

/**
 * The node for a doubly linked list.
 * @template T The type of value stored inside the node
 */
export interface DoublyLinkedListNode<T> {
  /**
   * The node value
   */
  value: T;

  /**
   * A pointer to the next node in the list. It's undefined if there isn't a next node in the list (e.g.: current node is the tail).
   */
  next?: DoublyLinkedListNode<T>;

  /**
   * A pointer to the previous node in the list. It's undefined if there isn't a previous node in the list (e.g.: current node is the head).
   */
  previous?: DoublyLinkedListNode<T>;
}

/**
 * Represents a point in a two-dimensional coordinate system
 */
export interface Point {
  /**
   * The x coordinate value
   */
  x: number;

  /**
   * The y coordinate value
   */
  y: number;
}

/**
 * The node for a binary tree
 */
export interface BinaryTreeNode<T> {
  /**
   * The node value
   */
  value: T;

  /**
   * The left child of the node
   */
  left: BinaryTreeNode<T> | null;

  /**
   * The right child of the node
   */
  right: BinaryTreeNode<T> | null;
}

/**
 * This type represents a graph by using a weighted adjacency matrix.
 * The matrix is a square, whose number of rows and columns is equal to the number of vertices in the graph.
 * If the graph has n vertices (with n >= 1), then the vertices will be named 0, 1, 2, ..., n-1.
 * The matrix entry positioned at row i and column j is a non-negative integer number.
 * Its value is 0 if there is NO edge between vertex i and vertex j. Its value is greater than zero if there is an edge between vertex i and vertex j: in that case the entry value is the edge weight.
 * The assumption here is that for each edge the weight is a positive integer number (so 0 can be used to signal that there is no edge).
 */
export type WeightedAdjacencyMatrix = number[][];

/**
 * Represents an edge in a graph.
 * The to field is the vertex the edge is connected to.
 * The weight field is the weight of the edge.
 * If a given graph has n vertices (n >= 1) they are indicated with the integer numbers 0, 1, 2, ..., n-1.
 * The weight of an edge is always a positive integer number.
 */
export interface GraphEdge {
  to: number;
  weight: number;
}

/**
 * This type represents a graph by using a weighted adjacency list.
 * The number of items in the list equals the number of vertices in the graph: for each graph vertex there is a corresponding list item.
 * If the graph has n vertices (with n >= 1), then the vertices will be named 0, 1, 2, ..., n-1.
 * Vertex 0 corresponds to the list item in position 0, vertex 1 corresponds to the list item in position 1 and so on.
 * For each vertex in the graph, the list of all the edges originating from it is provided as an array of GraphEdge items.
 */
export type WeightedAdjacencyList = GraphEdge[][];
