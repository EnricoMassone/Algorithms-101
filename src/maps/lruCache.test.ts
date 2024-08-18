import { LruCache } from "./lruCache";

describe("LRU cache", () => {
  test("It works as expected", function () {
    const cache = new LruCache<string, number>(3);

    expect(cache.get("foo")).toEqual(undefined);
    cache.set("foo", 69);
    expect(cache.get("foo")).toEqual(69);

    cache.set("bar", 420);
    expect(cache.get("bar")).toEqual(420);

    cache.set("baz", 1337);
    expect(cache.get("baz")).toEqual(1337);

    cache.set("ball", 69420);
    expect(cache.get("ball")).toEqual(69420);
    expect(cache.get("foo")).toEqual(undefined);
    expect(cache.get("bar")).toEqual(420);
    cache.set("foo", 69);
    expect(cache.get("bar")).toEqual(420);
    expect(cache.get("foo")).toEqual(69);

    // shouldn't of been deleted, but since bar was get'd, bar was added to the
    // front of the list, so baz became the end
    expect(cache.get("baz")).toEqual(undefined);
  });
});
