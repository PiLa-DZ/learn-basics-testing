import { test } from "node:test";
import assert from "node:assert";
import { formatCurrency } from "../../../src/utils/expenseHelpers/formatCurrency.js";

test(`formatCurrency Should return a string "$0.33" if an argument is a number 0.333333...`, () => {
  const float = 0.33333333;
  const result = formatCurrency(float);
  assert.strictEqual(result, "$0.33");
});

test(`formatCurrency Should return "$10.00" for string input "10"`, () => {
  const result = formatCurrency("10");
  assert.strictEqual(result, "$10.00");
});

test(`formatCurrency Should return "$0.00" for input 0`, () => {
  const result = formatCurrency(0);
  assert.strictEqual(result, "$0.00");
});
