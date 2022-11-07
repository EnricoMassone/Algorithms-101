import { Point } from "../types";

const directions = [
  [0, -1], // up
  [1, 0], // right
  [0, 1], // down
  [-1, 0], // left
];

function equals(a: Point, b: Point): boolean {
  return a.x === b.x && a.y === b.y;
}

function isInsideMazeBoundaries(maze: string[], point: Point) {
  const { x, y } = point;
  const isValidXCoordinate = x >= 0 && x < maze[0].length;
  const isValidYCoordinate = y >= 0 && y < maze.length;
  return isValidXCoordinate && isValidYCoordinate;
}

function walk(
  maze: string[],
  wall: string,
  current: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  /*
  Base cases are:
  1) current position is outside the maze boundaries -> return false (can't visit this tale)
  2) current position is a wall -> return false (can't visit this tale)
  3) current position is the end position -> return true (I reached the end of the maze)
  4) current position has already been visited -> return false (I don't want to visit the same tale twice)
  */

  if (!isInsideMazeBoundaries(maze, current)) {
    // I'm out of the maze
    return false;
  }

  if (maze[current.y][current.x] === wall) {
    // it's a wall
    return false;
  }

  if (equals(current, end)) {
    // I reached the end of the maze
    path.push(end); // I want the end tale to be the last point of my path through the maze.
    return true;
  }

  if (seen[current.y][current.x]) {
    // I have already visited this tale
    return false;
  }

  // I didn't hit a base case, so I need to recurse
  path.push(current);
  seen[current.y][current.x] = true;

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const [deltaX, deltaY] = direction;
    const tale: Point = { x: current.x + deltaX, y: current.y + deltaY };

    const movementIsStepTowardsExit = walk(maze, wall, tale, end, seen, path);
    if (movementIsStepTowardsExit) {
      // moving in this directions allows to reach the end of the maze
      return true;
    }
  }

  // there is no way to reach the end of the maze from the current position
  path.pop();
  return false;
}

/**
 * Solves the provided maze, by finding a path from start to end.
 * This is a maze solver for two-dimensional mazes (basically a rectangle).
 * The (x,y) coordinate system has its origin in the upper-left corner of the maze.
 * The x axis goes from left to right.
 * The y axis goes from top to bottom.
 * The maze contains two kinds of tiles: empty tiles and walls. Only empty tiles can be visited.
 * Both start and end are empty tiles of the maze and this algorithm finds a path from start to end.
 * @param { string[] } maze - The maze to be solved
 * @param { string } wall - The string indicating a wall in the maze. A tile which contains this string is a wall.
 * @param { Point } start - The starting point in the maze
 * @param { Point } end - The ending point in the maze
 * @returns { Point[] } A path to go from start to end
 */
function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array<boolean>(maze[0].length).fill(false));
  }

  const path: Point[] = [];

  walk(maze, wall, start, end, seen, path);

  return path;
}

export default solve;
