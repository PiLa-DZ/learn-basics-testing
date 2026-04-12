import { describe, test } from "node:test";
import assert from "node:assert";
import { formatCurrency } from "../../../src/utils/expenseHelpers/formatCurrency.js";

describe("formatCurrency", () => {
  test(`should return a string "$0.33" if an argument is a number 0.333333...`, () => {
    const float = 0.33333333;

    const result = formatCurrency(float);

    assert.strictEqual(result, "$0.33");
  });

  test(`should return "$10.00" for string input "10"`, () => {
    const numStr = "10";

    const result = formatCurrency(numStr);

    assert.strictEqual(result, "$10.00");
  });

  test(`should return "$0.00" for input 0`, () => {
    const zero = 0;

    const result = formatCurrency(zero);

    assert.strictEqual(result, "$0.00");
  });
});
