# Documentation: Understanding Test Coverage

This document explains what test coverage is
and how to interpret it to improve your test suite.

## What is Test Coverage?

Test coverage is a metric that measures the percentage
of your source code that is executed when your tests run.

It helps you identify "blind spots"—parts
of your code that have never been tested
and might contain hidden bugs.

## How to Measure

Node.js has a built-in coverage reporter.
You can generate a report by running your tests with the coverage flag:

```bash
npm test -- --experimental-test-coverage
node --test --experimental-test-coverage
```

## Interpreting the Output

When you run the command above,
Node.js outputs a table showing:

- **`% Line`**: Percentage of executable lines covered.
- **`% Func`**: Percentage of functions covered.
- **`% Branch`**: Percentage of logic branches (e.g., `if` statements) covered.

### Key Metrics

- **100% Coverage**:
  All lines and branches have been executed at least once by your tests.

- **Low Coverage**:
  Suggests that parts of your code have not been exercised,
  making it a high priority for writing new tests.

- **Branch Coverage**:
  This is the most critical metric.
  If you have an `if` statement,
  you need at least two tests:
  one where the `if` is true,
  and one where it is false (or the `else` case).

## How to Improve Coverage

1. **Analyze the report**: Look for lines or branches marked with low coverage.

2. **Write targeted tests**:
   Create new test cases specifically designed to execute those unreached paths
   (e.g., adding an error-handling test to cover an `if` block that throws an error).

3. **Iterate**:
   Run the coverage report again to verify that your new tests have improved the numbers.

_Remember: 100% coverage does not guarantee that your code is bug-free,
but it ensures that you have verified all logic paths within your code!_
