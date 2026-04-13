/**
 * Simulates fetching a user from an API.
 */
export const fetchUser = async (id) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  if (id < 0) throw new Error("User not found");
  
  return { id, name: "API User" };
};
