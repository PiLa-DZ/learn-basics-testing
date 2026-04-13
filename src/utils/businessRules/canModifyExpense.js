/**
 * 1. Ownership Validation
 * Only the owner or an admin can modify an expense.
 */
export const canModifyExpense = (user, expense) => {
  if (!user || !expense) return false;
  if (user.role === "admin") return true;
  return expense.userId === user.id;
};
