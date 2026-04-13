import { describe, test } from "node:test";
import assert from "node:assert";
import { canModifyExpense } from "../../../src/utils/businessRules/canModifyExpense.js";

describe("canModifyExpense", () => {
  test("should return true if user role is admin", () => {
    const user = { id: 1, name: "Joul", role: "admin" };
    const expense = { id: 99, description: "Phone", userId: 2 };

    const result = canModifyExpense(user, expense);

    assert.strictEqual(result, true);
  });

  test("should return true if user id matches expense userId", () => {
    const user = { id: 1, name: "Joul", role: "user" };
    const expense = { id: 99, description: "Phone", userId: 1 };

    const result = canModifyExpense(user, expense);

    assert.strictEqual(result, true);
  });

  test("should return false if user role is not admin and id does not match", () => {
    const user = { id: 1, name: "Joul", role: "user" };
    const expense = { id: 99, description: "Phone", userId: 2 };

    const result = canModifyExpense(user, expense);

    assert.strictEqual(result, false);
  });

  test("should return false if user or expense is undefined", () => {
    const user = { id: 1, name: "Joul", role: "admin" };
    const expense = { id: 99, description: "Phone", userId: 1 };

    assert.strictEqual(canModifyExpense(undefined, expense), false);
    assert.strictEqual(canModifyExpense(user, undefined), false);
  });

  test("should return false if user or expense is null", () => {
    assert.strictEqual(canModifyExpense(null, { id: 1 }), false);
    assert.strictEqual(canModifyExpense({ id: 1 }, null), false);
  });
});
