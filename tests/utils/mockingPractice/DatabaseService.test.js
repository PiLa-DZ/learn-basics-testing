import { describe, test, mock } from "node:test";
import assert from "node:assert";
import { DatabaseService } from "../../../src/utils/mockingPractice/DatabaseService.js";

describe("DatabaseService", () => {
  test("should mock the getUser method to return custom data", () => {
    // 1. Instantiate the service
    const dbService = new DatabaseService();

    // 2. Use mock.method to intercept the real implementation
    const mockUser = { id: 1, name: "Mock User", role: "admin" };
    mock.method(dbService, "getUser", () => mockUser);

    // 3. Perform the call and verify result
    const result = dbService.getUser(1);
    assert.deepStrictEqual(result, mockUser);
    assert.strictEqual(result.name, "Mock User");

    // 4. Verify the method was called with the correct argument
    assert.strictEqual(dbService.getUser.mock.calls.length, 1);
    assert.strictEqual(dbService.getUser.mock.calls[0].arguments[0], 1);

    // Always reset mocks when done
    dbService.getUser.mock.restore();
  });
});
