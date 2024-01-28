/**
 * Algolia Search
 */
export const ALGOLIA = {
  appId: process.env.APPID ?? "dev",
  apiKey: process.env.APIKEY ?? "dev",
  indexName: process.env.INDEX ?? "dev",
};
