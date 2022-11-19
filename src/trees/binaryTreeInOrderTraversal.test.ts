import traverse from "./binaryTreeInOrderTraversal";
import { BinaryTreeNode } from "../types";

const tree: BinaryTreeNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: {
        value: 45,
        right: null,
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: null,
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    },
  },
};

test("Binary tree in order traversal", () => {
  expect(traverse(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
