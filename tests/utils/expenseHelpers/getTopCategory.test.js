import { test } from "node:test";
import assert from "node:assert";
import { getTopCategory } from "../../../src/utils/expenseHelpers/getTopCategory.js";

test("getTopCategory Should return 'The name of the category with the highest total amount'", () => {
  const expenses = [
    { id: 1, description: "Lunch", amount: 20, category: "Food" },
    { id: 2, description: "Keyboard", amount: 150, category: "Tech" },
    { id: 3, description: "Coffee", amount: 5, category: "Food" },
    { id: 4, description: "RAM", amount: 80, category: "Tech" },
  ];

  const result = getTopCategory(expenses);

  assert.strictEqual(result, "Tech");
});

test("getTopCategory Should return the first category in case of a tie.", () => {
  const expenses = [
    { id: 1, amount: 50, category: "Food" },
    { id: 2, amount: 50, category: "Tech" },
  ];

  const result = getTopCategory(expenses);

  assert.strictEqual(result, "Food");
});

test("getTopCategory Should return Null If the array you passed in is empty ([]).", () => {
  const emptyArr = [];

  const result = getTopCategory(emptyArr);

  assert.strictEqual(result, null);
});

