import { describe, test } from "node:test";
import assert from "node:assert";
import { aggregateByCategory } from "../../../src/utils/dataTransformers/aggregateByCategory.js";

describe("aggregateByCategory", () => {
  test("should aggregate amounts by category", () => {
    const expenses = [
      { category: "Food", amount: 10 },
      { category: "Tech", amount: 150 },
      { category: "Food", amount: 20 },
      { category: "Tech", amount: 50 },
    ];

    const result = aggregateByCategory(expenses);

    const expected = {
      Food: 30,
      Tech: 200,
    };

    assert.deepStrictEqual(result, expected);
  });

  test("should return an empty object for an empty array", () => {
    const expenses = [];

    const result = aggregateByCategory(expenses);

    assert.deepStrictEqual(result, {});
  });
});
