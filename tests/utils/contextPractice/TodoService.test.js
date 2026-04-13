/*
import { describe, test, before, after } from "node:test";
import assert from "node:assert";
import { PrismaClient } from "@prisma/client";
import { TodoService } from "../../../src/utils/contextPractice/TodoService.js";

describe("TodoService", () => {
  let prisma;
  let todoService;

  before(async () => {
    // In a real project, we'd use a separate schema for testing
    // and run `prisma migrate deploy` or `prisma db push`
    prisma = new PrismaClient({
      datasources: {
        db: { url: "file::memory:" },
      },
    });
    await prisma.$connect();
    // Assuming schema is already pushed/synced in test env
    await prisma.$executeRaw`CREATE TABLE IF NOT EXISTS "User" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "name" TEXT)`;
    await prisma.$executeRaw`CREATE TABLE IF NOT EXISTS "Todo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "title" TEXT, "userId" INTEGER, FOREIGN KEY("userId") REFERENCES "User"("id"))`;
    
    // Seed test data
    await prisma.user.create({ data: { id: 1, name: "Test User" } });
    
    todoService = new TodoService(prisma);
  });

  after(async () => {
    await prisma.$disconnect();
  });

  test("should create and retrieve a todo", async () => {
    const todo = await todoService.createTodo(1, "Test Todo");
    assert.strictEqual(todo.title, "Test Todo");

    const todos = await todoService.getTodosByUser(1);
    assert.strictEqual(todos.length, 1);
    assert.strictEqual(todos[0].title, "Test Todo");
  });
});
*/
