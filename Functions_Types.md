# Functions Types

## 1. Pure Functions (The "Easy" Wins)

A pure function is a function
where the same input always produces the same output
and has no side effects
(it doesn't touch the database or the filesystem).

- Examples:
  Calculating the total of an expense array,
  formatting a date,
  or validating if a string is a valid email.

- Why test them?
  They are the foundation of your logic.
  They are extremely fast to test because you don't need mocks.

- What to test: \* The "Happy Path" (Valid input).

- Edge cases (Empty arrays, 0 values, null inputs).

## 2. Transformation & Mapping Logic

Since you use Prisma,
you will often get raw data from MariaDB
that needs to be "cleaned" before it goes to the frontend.

- Examples:
  A function that takes a list of expenses
  and groups them by month for your summary command.

- Why test them?
  AI agents (like Gemini) often make small indexing mistakes
  or off-by-one errors in these loops.

- What to test:
  Ensure the output structure matches exactly what your CLI or API expects.

## 3. Business Logic (The "Core")

These are functions that decide if an action should happen.
This is the most important part of being a "Backend Engineer" vs. just a "Coder."

- Examples: \* "Can a user delete this expense?" (Check ownership).

- "Is the amount greater than the user's budget?"

- Why test them?
  These protect the integrity of your data.
  If your logic fails here,
  you lose money or leak data.

## 4. Integration Points (The "Hard" Part)

These functions interact with outside worlds
(Filesystem, Databases, APIs).

- Examples: Your addExpense (Filesystem) or a Prisma query (Database).

- The Strategy:
  Don't test the Database itself
  (Prisma's developers already tested Prisma).
  Test that your code sends the right data to the database.

---

## Summary: Where to Start?

If you want to master testing while finishing your Expense-Tracker,
focus on these specific types in this order:

| Function Type | Example in your project  | Priority                |
| ------------- | ------------------------ | ----------------------- |
| Pure Logic    | calculateTotal(expenses) | ⭐⭐⭐ (Start here)     |
| Validation    | isValidAmount(value)     | ⭐⭐⭐                  |
| Data Mapping  | groupByMonth(expenses)   | ⭐⭐                    |
| Side Effects  | saveToFile(data)         | ⭐ (Do last with Mocks) |
