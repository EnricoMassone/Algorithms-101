import twoCrystalBalls from "./twoCrystalBalls";

test("Two crystal balls", () => {
  const firstBreakIndex = Math.floor(Math.random() * 10000);
  const breaks = new Array<boolean>(10000).fill(false);

  for (let i = firstBreakIndex; i < 10000; ++i) {
    breaks[i] = true;
  }

  expect(twoCrystalBalls(breaks)).toEqual(firstBreakIndex);
  expect(twoCrystalBalls(new Array<boolean>(821).fill(false))).toEqual(-1);
});
