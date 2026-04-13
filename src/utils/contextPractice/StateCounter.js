/**
 * A simple stateful counter.
 */
export const stateCounter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  },
  reset() {
    this.count = 0;
  }
};
