# Documentation: Testing Database Integration with Prisma

This document explains how to perform integration testing with Prisma using an in-memory SQLite database, managed by lifecycle hooks.

## Source Code Analysis (`TodoService.js`)

The `TodoService` class provides a wrapper around Prisma client operations, specifically for creating and retrieving TODO items associated with a user.

```javascript
export class TodoService {
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async createTodo(userId, title) {
    return await this.prisma.todo.create({
      data: { title, userId },
    });
  }

  async getTodosByUser(userId) {
    return await this.prisma.todo.findMany({
      where: { userId },
    });
  }
}
```

## Testing Implementation (`TodoService.test.js`)

### Key Concepts

- **Lifecycle Hooks**:
  - **`before(async () => ...)`**: Runs once before all tests in the suite. We use this to initialize the `PrismaClient` with an in-memory SQLite database (`file::memory:`), set up the database schema, and seed required test data.
  - **`after(async () => ...)`**: Runs once after all tests in the suite. Used to safely disconnect the `PrismaClient` and close the connection.
- **In-Memory Database**: By using SQLite in memory, our integration tests are extremely fast and completely isolated from the production database.

## Test Cases

- **Integration Flow**: Validates the end-to-end flow of creating a TODO and retrieving it via the service, confirming that Prisma correctly interacts with the SQLite database.

## How to Run
```bash
npm test
```
