import { describe, test, mock } from "node:test";
import assert from "node:assert";
import { debounce } from "../../../src/utils/mockingPractice/debounce.js";

describe("debounce", () => {
  test("should only execute after the specified delay", () => {
    mock.timers.enable();

    const callback = mock.fn();
    const debouncedFn = debounce(callback, 1000);

    debouncedFn();

    // Should not be called immediately
    assert.strictEqual(callback.mock.calls.length, 0);

    // Fast-forward time
    mock.timers.tick(1000);

    assert.strictEqual(callback.mock.calls.length, 1);

    mock.timers.reset();
  });

  test("should restart delay if called multiple times", () => {
    mock.timers.enable();

    const callback = mock.fn();
    const debouncedFn = debounce(callback, 1000);

    debouncedFn(); // T=0
    mock.timers.tick(500); // T=500
    debouncedFn(); // Reset timer to T=1500

    mock.timers.tick(500); // T=1000 total (only 500 since last call)
    assert.strictEqual(callback.mock.calls.length, 0);

    mock.timers.tick(500); // T=1500 total
    assert.strictEqual(callback.mock.calls.length, 1);

    mock.timers.reset();
  });
});
