import { describe, test } from "node:test";
import assert from "node:assert";
import { fetchUser } from "../../../src/utils/contextPractice/fetchUser.js";

describe("fetchUser", () => {
  test("should return user object for valid ID", async () => {
    const user = await fetchUser(1);
    assert.deepStrictEqual(user, { id: 1, name: "API User" });
  });

  test("should throw error for invalid ID", async () => {
    await assert.rejects(
      async () => {
        await fetchUser(-1);
      },
      {
        message: "User not found",
      }
    );
  });
});
