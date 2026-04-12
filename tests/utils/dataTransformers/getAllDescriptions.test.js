import { describe, test } from "node:test";
import assert from "node:assert";
import { getAllDescriptions } from "../../../src/utils/dataTransformers/getAllDescriptions.js";

describe("getAllDescriptions", () => {
  test("should return a flat array of all expense descriptions", () => {
    const users = [
      {
        name: "Nabil",
        expenses: [
          { description: "Mechanical Keyboard", amount: 150 },
          { description: "Coffee", amount: 5 },
        ],
      },
      {
        name: "Friend",
        expenses: [
          { description: "Energy Drink", amount: 3 },
          { description: "Cloud Hosting", amount: 20 },
        ],
      },
    ];

    const result = getAllDescriptions(users);

    const expected = [
      "Mechanical Keyboard",
      "Coffee",
      "Energy Drink",
      "Cloud Hosting",
    ];

    assert.deepStrictEqual(result, expected);
  });

  test("should return an empty array if users have no expenses", () => {
    const users = [
      { name: "Nabil", expenses: [] },
      { name: "Friend", expenses: [] },
    ];

    const result = getAllDescriptions(users);

    assert.deepStrictEqual(result, []);
  });
});
