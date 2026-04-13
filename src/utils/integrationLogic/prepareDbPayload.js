/**
 * 2. Database Payload Preparer
 * Converts a raw CLI input into a clean object
 * ready for a Prisma 'create' call.
 */
export const prepareDbPayload = (description, amount, userId) => {
  if (!description || !amount || !userId)
    throw new Error("Missing required fields");

  return {
    data: {
      description: description.trim(),
      amount: parseFloat(amount),
      user: { connect: { id: userId } },
      createdAt: new Date().toISOString(),
    },
  };
};
