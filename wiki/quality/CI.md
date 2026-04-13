# Documentation: Setting up Continuous Integration (CI)

This document explains how to automate your test suite using GitHub Actions,
ensuring that your code remains reliable with every change.

## What is Continuous Integration?

CI is a development practice
where developers frequently merge their code into a shared repository,
each triggered by an automated build and test.
This ensures that errors are detected immediately.

## Our CI Workflow (`.github/workflows/test.yml`)

We have defined a workflow
that triggers on every `push` to `main` and on any `pull_request` aimed at `main`.

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22.x"
      - run: npm install
      - run: npm test
```

## How It Works

1. **Triggers**: The workflow listens for code changes in your repository.

2. **Environment**: It spins up a fresh virtual machine (`ubuntu-latest`).

3. **Setup**: It checks out your code and installs the correct Node.js version.

4. **Verification**:
    It runs `npm install` to prepare dependencies
    and `npm test` to run your full test suite.

5. **Reporting**:
    If any test fails,
    GitHub will mark the push or pull request with a red "X,"
    preventing you from merging broken code.

## Why this is essential

- **Consistency**: Tests run in a clean, standardized environment, eliminating the "works on my machine" problem.

- **Speed**: You get immediate feedback on whether your latest changes introduced a regression.

- **Confidence**: You can refactor and add features knowing that the CI pipeline will catch any accidental breaks.
