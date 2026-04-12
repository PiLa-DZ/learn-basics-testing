import { describe, test } from "node:test";
import assert from "node:assert";
import { isValidAmount } from "../../../src/utils/expenseHelpers/isValidAmount.js";

describe("isValidAmount", () => {
  test(`should return true if an argument is 5.5 or "5.5"`, () => {
    const a = 5.5;
    const b = "5.5";

    const result1 = isValidAmount(a);
    const result2 = isValidAmount(b);

    assert.strictEqual(result1, true);
    assert.strictEqual(result2, true);
  });

  test(`should return false if an argument is 0 or NaN or negative number`, () => {
    const zero = 0;
    const notNum = NaN;
    const negativeNum = -5;

    const result1 = isValidAmount(zero);
    const result2 = isValidAmount(notNum);
    const result3 = isValidAmount(negativeNum);

    assert.strictEqual(result1, false);
    assert.strictEqual(result2, false);
    assert.strictEqual(result3, false);
  });
});
