/**
 * A simple DatabaseService class that fetches data.
 * In a real scenario, this would perform a real DB query.
 */
export class DatabaseService {
  /**
   * Fetches user data by ID.
   */
  getUser(id) {
    // Imagine this is a real DB call that takes time/resources
    return { id, name: "Real User", role: "user" };
  }
}
