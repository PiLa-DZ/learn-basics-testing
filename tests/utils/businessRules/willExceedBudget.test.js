import { describe, test } from "node:test";
import assert from "node:assert";
import { willExceedBudget } from "../../../src/utils/businessRules/willExceedBudget.js";

describe("willExceedBudget", () => {
  test("should return true if total exceeds the monthly limit", () => {
    assert.strictEqual(willExceedBudget(800, 300, 1000), true);
  });

  test("should return false if total is within the monthly limit", () => {
    assert.strictEqual(willExceedBudget(500, 200, 1000), false);
  });

  test("should return false if total is exactly equal to the monthly limit", () => {
    assert.strictEqual(willExceedBudget(700, 300, 1000), false);
  });
});
