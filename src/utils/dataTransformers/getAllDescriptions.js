/**
 * 2. Flatten Nested Data
 * Useful if you have a "User" object with an "Expenses" array
 * and you want a single list of all expense descriptions.
 */
export const getAllDescriptions = (users) => {
  return users.flatMap((user) => user.expenses.map((e) => e.description));
};
