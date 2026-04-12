import { describe, test } from "node:test";
import assert from "node:assert";
import { getTopExpensiveItems } from "../../../src/utils/dataTransformers/getTopExpensiveItems.js";

describe("getTopExpensiveItems", () => {
  const expenses = [
    { description: "Cheap", amount: 10 },
    { description: "Mid", amount: 50 },
    { description: "Expensive", amount: 100 },
    { description: "Very Expensive", amount: 200 },
  ];

  test("should return the top N expensive items sorted descending", () => {
    const result = getTopExpensiveItems(expenses, 2);

    const expected = [
      { description: "Very Expensive", amount: 200 },
      { description: "Expensive", amount: 100 },
    ];

    assert.deepStrictEqual(result, expected);
  });

  test("should use the default limit of 3 if no limit is provided", () => {
    const result = getTopExpensiveItems(expenses);

    assert.strictEqual(result.length, 3);
    assert.strictEqual(result[0].amount, 200);
  });

  test("should return all items if limit exceeds array length", () => {
    const result = getTopExpensiveItems(expenses, 10);

    assert.strictEqual(result.length, 4);
  });
});
