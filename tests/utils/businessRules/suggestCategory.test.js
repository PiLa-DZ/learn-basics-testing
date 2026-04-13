import { describe, test } from "node:test";
import assert from "node:assert";
import { suggestCategory } from "../../../src/utils/businessRules/suggestCategory.js";

describe("suggestCategory", () => {
  test("should return 'Transport' for transport-related keywords", () => {
    assert.strictEqual(suggestCategory("Uber ride"), "Transport");
    assert.strictEqual(suggestCategory("Gas station"), "Transport");
    assert.strictEqual(suggestCategory("Train ticket"), "Transport");
  });

  test("should return 'Food' for food-related keywords", () => {
    assert.strictEqual(suggestCategory("Lunch food"), "Food");
    assert.strictEqual(suggestCategory("Nice restaurant"), "Food");
    assert.strictEqual(suggestCategory("Pepperoni pizza"), "Food");
  });

  test("should return 'Tech' for tech-related keywords", () => {
    assert.strictEqual(suggestCategory("Buy server"), "Tech");
    assert.strictEqual(suggestCategory("Web hosting"), "Tech");
    assert.strictEqual(suggestCategory("New domain"), "Tech");
  });

  test("should return 'General' for unknown keywords", () => {
    assert.strictEqual(suggestCategory("Clothes"), "General");
    assert.strictEqual(suggestCategory("Rent"), "General");
  });

  test("should be case-insensitive", () => {
    assert.strictEqual(suggestCategory("PIZZA"), "Food");
    assert.strictEqual(suggestCategory("HOSTING"), "Tech");
  });
});
