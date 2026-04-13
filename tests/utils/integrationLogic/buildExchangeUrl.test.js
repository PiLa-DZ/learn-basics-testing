import { describe, test } from "node:test";
import assert from "node:assert";
import { buildExchangeUrl } from "../../../src/utils/integrationLogic/buildExchangeUrl.js";

describe("buildExchangeUrl", () => {
  test("should build a valid URL with correct query parameters", () => {
    const baseApi = "https://api.exchangerates.io/latest";
    const from = "USD";
    const to = "EUR";

    const result = buildExchangeUrl(baseApi, from, to);

    // Using URL to verify parts ensures robustness
    const url = new URL(result);
    assert.strictEqual(url.origin, "https://api.exchangerates.io");
    assert.strictEqual(url.pathname, "/latest");
    assert.strictEqual(url.searchParams.get("base"), "USD");
    assert.strictEqual(url.searchParams.get("symbols"), "EUR");
  });

  test("should handle existing query parameters if any (optional check)", () => {
    const baseApi = "https://api.exchangerates.io/latest?api_key=123";
    const from = "USD";
    const to = "JPY";

    const result = buildExchangeUrl(baseApi, from, to);

    const url = new URL(result);
    assert.strictEqual(url.searchParams.get("api_key"), "123");
    assert.strictEqual(url.searchParams.get("base"), "USD");
    assert.strictEqual(url.searchParams.get("symbols"), "JPY");
  });
});
