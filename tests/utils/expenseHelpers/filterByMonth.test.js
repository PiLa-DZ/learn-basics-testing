import { test } from "node:test";
import assert from "node:assert";
import { filterByMonth } from "../../../src/utils/expenseHelpers/filterByMonth.js";

test("filterByMonth should return expenses for the specified month", () => {
  const expenses = [
    { id: 1, date: "2025-01-15", amount: 10 },
    { id: 2, date: "2025-02-10", amount: 20 },
    { id: 3, date: "2025-01-20", amount: 30 },
  ];

  const result = filterByMonth(expenses, 1);

  assert.strictEqual(result.length, 2);
  assert.strictEqual(result[0].id, 1);
  assert.strictEqual(result[1].id, 3);
});

test("filterByMonth should return an empty array if no expenses match the month", () => {
  const expenses = [{ id: 1, date: "2025-01-15", amount: 10 }];

  const result = filterByMonth(expenses, 5);

  assert.strictEqual(result.length, 0);
});
