import { describe, test } from "node:test";
import assert from "node:assert";
import { calculateTotal } from "../../../src/utils/expenseHelpers/calculateTotal.js";

describe("calculateTotal", () => {
  test("should return the sum of all expense amounts", () => {
    const expenses = [
      { id: 1, amount: 10 },
      { id: 2, amount: 20 },
      { id: 3, amount: 30 },
    ];

    const result = calculateTotal(expenses);

    assert.strictEqual(result, 60);
  });

  test("should return 0 for an empty array", () => {
    const expenses = [];

    const result = calculateTotal(expenses);

    assert.strictEqual(result, 0);
  });
});
