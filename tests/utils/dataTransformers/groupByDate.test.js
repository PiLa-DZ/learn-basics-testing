import { describe, test } from "node:test";
import assert from "node:assert";
import { groupByDate } from "../../../src/utils/dataTransformers/groupByDate.js";

describe("groupByDate", () => {
  test("should group expenses by date string", () => {
    const expenses = [
      { date: "2025-01-01", description: "Coffee", amount: 5 },
      { date: "2025-01-02", description: "Lunch", amount: 15 },
      { date: "2025-01-01", description: "Snack", amount: 3 },
    ];

    const result = groupByDate(expenses);

    const expected = {
      "2025-01-01": [
        { date: "2025-01-01", description: "Coffee", amount: 5 },
        { date: "2025-01-01", description: "Snack", amount: 3 },
      ],
      "2025-01-02": [{ date: "2025-01-02", description: "Lunch", amount: 15 }],
    };

    assert.deepStrictEqual(result, expected);
  });

  test("should return an empty object if no expenses are provided", () => {
    const expenses = [];

    const result = groupByDate(expenses);

    assert.deepStrictEqual(result, {});
  });
});
