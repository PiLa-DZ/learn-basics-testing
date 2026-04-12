# Recommendation on Learning Testing

You do **not** need to stop your current progress
to master advanced testing frameworks,
but you **should** integrate basic testing into your workflow immediately.

### Why you shouldn't "drop everything"

Testing is a vast field.
Learning it in isolation can be abstract and demotivating.
By continuing to build your projects,
you gain the necessary context—the
"what" and "why" of your code—
which makes the "how" of testing much easier to understand.

### Why you need to start testing now (The "AI Agent" factor)

You are correct that working with AI agents (like Gemini CLI)
highlights the need for testing.
AI can generate code that looks correct
but contains subtle logic errors.
A small test suite acts as your "safety net,"
allowing you to verify that the AI's suggestions
actually work and do not break existing functionality.

### Recommended Strategy

1. **Adopt "Test-After" for now:**
   Don't worry about strict Test-Driven Development (TDD) yet.
   Continue building your features,
   but immediately after finishing a function or endpoint,
   write a simple test to verify it.

2. **Focus on Unit Tests first:**
   In your Node.js/TypeScript projects,
   learn `Jest` or `Vitest`.
   Focus on testing individual functions
   input vs. expected output.

3. **Use the "Validation" mandate:**
   Treat testing as part of the "Execution" phase
   you are already practicing.
   A task is not finished until
   you have a small script or test case that proves it works.

4. **Learn by doing:**
   Since you are building APIs (EduRegistry-API, etc.),
   learn how to write simple integration tests
   that make HTTP requests to your server
   and verify the response status and data.

**Action Plan:**

- Continue your roadmap.
- When you reach the "Testing" section, you will already have a codebase ready for professional-grade testing.
- For your current projects, add a `tests/` directory and start writing simple verification scripts for your most critical logic.

_Don't view testing as a separate hurdle,
but as the final,
mandatory step of writing any piece of code._
