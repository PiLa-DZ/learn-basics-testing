import fs from "node:fs/promises";

/**
 * Reads a config file and returns its content.
 * We want to mock this dependency to avoid actual file system I/O in tests.
 */
export const readConfig = async (filePath) => {
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
};
