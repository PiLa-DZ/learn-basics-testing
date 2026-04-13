import { describe, test, beforeEach } from "node:test";
import assert from "node:assert";
import { stateCounter } from "../../../src/utils/contextPractice/StateCounter.js";

describe("stateCounter", () => {
  // Reset the state before every single test
  beforeEach(() => {
    stateCounter.reset();
  });

  test("should increment from 0 to 1", () => {
    const result = stateCounter.increment();
    assert.strictEqual(result, 1);
  });

  test("should increment from 0 to 1 again (verifying isolation)", () => {
    const result = stateCounter.increment();
    assert.strictEqual(result, 1);
  });
});
