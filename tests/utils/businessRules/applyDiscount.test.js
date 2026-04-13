import { describe, test } from "node:test";
import assert from "node:assert";
import { applyDiscount } from "../../../src/utils/businessRules/applyDiscount.js";

describe("applyDiscount", () => {
  test("should apply 10% discount for premium users with amount > 100", () => {
    const result = applyDiscount(200, "premium");
    assert.strictEqual(result, 180);
  });

  test("should not apply discount if amount is 100 or less", () => {
    const result = applyDiscount(100, "premium");
    assert.strictEqual(result, 100);
  });

  test("should not apply discount if user is not premium", () => {
    const result = applyDiscount(200, "standard");
    assert.strictEqual(result, 200);
  });
});
