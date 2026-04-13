import { describe, test, mock } from "node:test";
import assert from "node:assert";
import { getStoragePath } from "../../../src/utils/integrationLogic/getStoragePath.js";

describe("getStoragePath", () => {
  test("should generate path based on provided date", () => {
    const baseDir = "./storage";
    const fileName = "report.csv";
    const myDate = new Date("2026-05-15T00:00:00Z");

    const result = getStoragePath(baseDir, fileName, myDate);

    assert.strictEqual(result, "./storage/2026/05/report.csv");
  });

  test("should use current date when no date is provided using mock timers", () => {
    const baseDir = "./storage";
    const fileName = "report.csv";
    const fixedTime = new Date("2026-01-01T00:00:00Z");

    // Mock the global Date constructor
    mock.timers.enable({ now: fixedTime });

    const result = getStoragePath(baseDir, fileName);
    const expected = "./storage/2026/01/report.csv";

    assert.strictEqual(result, expected);

    // Always reset mocks!
    mock.timers.reset();
  });
});
