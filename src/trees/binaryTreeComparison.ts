import { BinaryTreeNode } from "../types";

function areEqual<T>(
  a: BinaryTreeNode<T> | null,
  b: BinaryTreeNode<T> | null,
): boolean {
  /*
   * There are a few base cases here:
   * 1) both a and b are null => I jumped off both trees, so the given trees are equal
   * 2) either a or b is null => I jumped off one of the two trees, while I'm still on a node of the other => the two trees are different in structure
   * 3) a and b have different values => I'm on a node in both trees, but the values are different => the two trees are different in value
   */
  if (a === null && b === null) {
    // jumped off both trees, so they are equal
    return true;
  }

  if (a === null || b === null) {
    // jumped off one of the trees, but not the other => spotted a structural difference between trees
    return false;
  }

  if (a.value !== b.value) {
    // found two nodes which have different values, so the trees have a value difference
    return false;
  }

  /*
   * This is the recursive case. The two trees are equal so far.
   * I neeed to compare the two left subtrees and the two right subtress.
   * The two trees are equal if and only if both the left subtrees AND the right subtrees are equal.
   */

  return areEqual(a.left, b.left) && areEqual(a.right, b.right);
}

/**
 * Checks whether the provided binary trees are equal.
 * The comparison is done by using a depth first tree traversal, because depth first traversal preserve the tree structure (while breath first traversal doesn't).
 * @param { BinaryTreeNode<T> } treeRoot - The root of the first binary tree
 * @param { BinaryTreeNode<T> } otherTreeRoot - The root of the second binary tree
 * @returns { boolean } True if the provided binary trees are equal, false otherwise
 * @template T The type of values contained in the tree nodes.
 */
function compare<T>(
  treeRoot: BinaryTreeNode<T>,
  otherTreeRoot: BinaryTreeNode<T>,
): boolean {
  return areEqual(treeRoot, otherTreeRoot);
}

export default compare;
