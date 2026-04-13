# Documentation: Testing `buildExchangeUrl`

This document explains the unit testing implementation
for the `buildExchangeUrl` utility function.

## Source Code Analysis (`buildExchangeUrl.js`)

The function constructs a URL for an external currency exchange
API by appending base currency and symbol parameters
using the `URL` and `URLSearchParams` web APIs,
ensuring query strings are correctly formatted.

```javascript
export const buildExchangeUrl = (baseApi, from, to) => {
  const url = new URL(baseApi);
  url.searchParams.append("base", from);
  url.searchParams.append("symbols", to);
  return url.toString();
};
```

## Testing Implementation (`buildExchangeUrl.test.js`)

### Key Concepts

- **URL API Validation**:
  We use the native `URL` object in our test assertions to parse the generated string.
  This is more robust than simple string matching,
  as it correctly handles variations in query parameter order.

## Test Cases

- **Correct Parameters**:
  Validates that the base and symbol parameters are correctly appended to the API URL.

- **Existing Parameters**:
  Validates that the function correctly appends new parameters even
  if the base URL already contains existing query parameters.

## How to Run

```bash
npm test
```
