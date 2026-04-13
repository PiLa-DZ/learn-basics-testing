import { describe, test, mock } from "node:test";
import assert from "node:assert";
import { prepareDbPayload } from "../../../src/utils/integrationLogic/prepareDbPayload.js";

describe("prepareDbPayload", () => {
  const fixedTime = new Date("2026-01-01T00:00:00Z");

  test("should return correctly formatted payload for valid inputs", () => {
    mock.timers.enable({ now: fixedTime });

    const result = prepareDbPayload("Lunch", 20, 1);

    const expected = {
      data: {
        description: "Lunch",
        amount: 20,
        user: { connect: { id: 1 } },
        createdAt: fixedTime.toISOString(),
      },
    };

    assert.deepStrictEqual(result, expected);

    mock.timers.reset();
  });

  test("should throw error if required fields are missing", () => {
    assert.throws(() => prepareDbPayload("", 20, 1), /Missing required fields/);
    assert.throws(
      () => prepareDbPayload("Lunch", null, 1),
      /Missing required fields/,
    );
    assert.throws(
      () => prepareDbPayload("Lunch", 20, undefined),
      /Missing required fields/,
    );
  });
});
