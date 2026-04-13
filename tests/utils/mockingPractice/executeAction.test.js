import { describe, test, mock } from "node:test";
import assert from "node:assert";
import { executeAction } from "../../../src/utils/mockingPractice/executeAction.js";

describe("executeAction", () => {
  test("should execute the action if shouldExecute is true", () => {
    // Create a mock function to track calls
    const mockAction = mock.fn(() => "Executed");

    const result = executeAction(mockAction, true);

    // Verify return value
    assert.strictEqual(result, "Executed");
    // Verify the mock was called exactly once
    assert.strictEqual(mockAction.mock.calls.length, 1);
  });

  test("should not execute the action if shouldExecute is false", () => {
    // Create a mock function to track calls
    const mockAction = mock.fn(() => "Executed");

    const result = executeAction(mockAction, false);

    // Verify return value
    assert.strictEqual(result, null);
    // Verify the mock was never called
    assert.strictEqual(mockAction.mock.calls.length, 0);
  });
});
