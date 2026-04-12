# Project Context: Testing & Development Workflow

- **Primary Goal:** Learn backend development by building projects while integrating a "Test-After" verification workflow.
- **Testing Standard:**
  - Use the built-in `node:test` module for all new testing tasks.
  - Assertions via `node:assert`.
- **Workflow Mandates:**
  - **Validation:** Every task in the Execution phase is incomplete until verified by a test script.
  - **Red-Green-Refactor:** Aim for this cycle when implementing new features or fixing bugs.
  - **File Structure:** Use a `/tests` directory or `*.test.ts` files alongside source code.
  - **Documentation:** Summarize new testing concepts in the repo's wiki.
- **Active Roadmap:** Refer to `ROADMAP_TESTING.md` for current learning phases and objectives.
- **Environment:** Node.js backend projects using JavaScript (ESM).
