/**
 * Implements the two crystal balls problem by using an array of boolean values as the input.
 * From a certain index on, all the array items are True (or all the array items are False).
 * The algorithm finds the first array index which contains True.The value -1 is returned if all array items are False.
 * @param { boolean[] } breaks - The array of boolean values used as the input. From a certain index on all the array items are True or all the array items are False.
 * @returns { number } The first array index which contains the True value or -1 if all array items equal False.
 */
function twoCrystalBalls(breaks: boolean[]): number {
  // compute the jump amount by using the square root of the array lenght
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  // use the first ball to jump until a breaking point is found.
  let breakingPointIndex = jumpAmount;

  for (; breakingPointIndex < breaks.length; breakingPointIndex += jumpAmount) {
    if (breaks[breakingPointIndex]) {
      break;
    }
  }

  // now we go back of jumpAmount of steps from the known breaking point and use the second ball to linear scan
  // until a breaking point is found.
  let currentIndex = breakingPointIndex - jumpAmount;

  for (
    let counter = 0;
    counter <= jumpAmount && currentIndex < breaks.length;
    counter++, currentIndex++
  ) {
    if (breaks[currentIndex]) {
      return currentIndex;
    }
  }

  return -1;
}

export default twoCrystalBalls;
