import { describe, test } from "node:test";
import assert from "node:assert";
import { calculateCategoryShares } from "../../../src/utils/dataTransformers/calculateCategoryShares.js";

describe("calculateCategoryShares", () => {
  test("should calculate correct percentages for provided categories", () => {
    const categoryTotals = { Food: 30, Tech: 170 };
    const totalBudget = 200;

    const result = calculateCategoryShares(categoryTotals, totalBudget);

    const expected = [
      { category: "Food", amount: 30, percentage: "15.0%" },
      { category: "Tech", amount: 170, percentage: "85.0%" },
    ];

    assert.deepStrictEqual(result, expected);
  });

  test("should return 0% if totalBudget is 0", () => {
    const categoryTotals = { Food: 10 };
    const totalBudget = 0;

    const result = calculateCategoryShares(categoryTotals, totalBudget);

    assert.deepStrictEqual(result, [{ category: "Food", amount: 10, percentage: "0%" }]);
  });
});
