/**
 * 1. File Path Generator
 * Ensures that files are stored in the correct directory
 * based on the year/month.
 */
export const getStoragePath = (baseDir, fileName, date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${baseDir}/${year}/${month}/${fileName}`;
};
