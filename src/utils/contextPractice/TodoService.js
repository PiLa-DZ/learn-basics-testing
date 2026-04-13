import { PrismaClient } from '@prisma/client';

/**
 * A service to handle database operations for TODOs.
 * This interacts directly with the database via Prisma.
 */
export class TodoService {
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async createTodo(userId, title) {
    return await this.prisma.todo.create({
      data: {
        title,
        userId,
      },
    });
  }

  async getTodosByUser(userId) {
    return await this.prisma.todo.findMany({
      where: { userId },
    });
  }
}
