import traverse from "./binaryTreePreorderTraversal";
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

test("Binary tree pre order traversal", () => {
  expect(traverse(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
