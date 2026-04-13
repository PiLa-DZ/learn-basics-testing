/**
 * 2. Budget Guard
 * Checks if adding a new expense will exceed the monthly budget.
 */
export const willExceedBudget = (currentTotal, newAmount, monthlyLimit) => {
  return currentTotal + newAmount > monthlyLimit;
};
