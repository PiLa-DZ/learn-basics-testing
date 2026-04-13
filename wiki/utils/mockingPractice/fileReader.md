# Documentation: Testing with `mock.method` on Modules

This document explains how to mock native Node.js modules
or external dependencies using `mock.method` in your unit tests.

## Source Code Analysis (`fileReader.js`)

The `readConfig` function utilizes the Node.js `fs/promises` module to read files.
In tests,
we want to avoid actual disk operations for speed and isolation.

```javascript
import fs from "node:fs/promises";

export const readConfig = async (filePath) => {
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
};
```

## Testing Implementation (`fileReader.test.js`)

### Key Concepts

- **Module Mocking**:
  We import the native module (e.g., `node:fs/promises`) into our test file.
  Because Node.js imports are shared within the process,
  we can use `mock.method` directly on the imported object
  to intercept its exported functions.

- **Async Mocks**:
  Since the target method is asynchronous,
  our mock implementation returns a `Promise.resolve(...)`.

## Test Cases

- **FileSystem Interception**:
  Validates that the function reads our provided mock data instead
  of attempting to access the physical file system.

- **Verification**: Validates that the file system reader was actually called.

## How to Run

```bash
npm test
```
