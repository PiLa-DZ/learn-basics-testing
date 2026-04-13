/**
 * 3. API Query String Builder
 * Prepares a URL for an external currency exchange API.
 */
export const buildExchangeUrl = (baseApi, from, to) => {
  const url = new URL(baseApi);
  url.searchParams.append("base", from);
  url.searchParams.append("symbols", to);
  return url.toString();
};
