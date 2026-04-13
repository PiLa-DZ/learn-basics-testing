/**
 * Executes a callback action if the condition is met.
 */
export const executeAction = (action, shouldExecute) => {
  if (shouldExecute) {
    return action();
  }
  return null;
};
