import { describe, test, mock } from "node:test";
import assert from "node:assert";
import fs from "node:fs/promises";
import { readConfig } from "../../../src/utils/mockingPractice/fileReader.js";

describe("readConfig", () => {
  test("should mock fs.readFile to return custom config", async () => {
    // 1. Mock the specific method of the node:fs/promises module
    const mockContent = JSON.stringify({ theme: "dark", port: 3000 });
    mock.method(fs, "readFile", () => Promise.resolve(mockContent));

    // 2. Call the function
    const config = await readConfig("config.json");

    // 3. Verify
    assert.deepStrictEqual(config, { theme: "dark", port: 3000 });
    assert.strictEqual(fs.readFile.mock.calls.length, 1);

    // 4. Cleanup
    fs.readFile.mock.restore();
  });
});
