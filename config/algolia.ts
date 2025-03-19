/**
 * Algolia search configuration for Docusaurus.
 * Defines credentials and settings for integrating Algolia search.
 */
export const ALGOLIA = {
  // Application ID for Algolia, with fallback for development
  appId: process.env.APPID || "dev",

  // API key for Algolia search, with fallback for development
  apiKey: process.env.APIKEY || "dev",

  // Index name for Algolia search, with fallback for development
  indexName: process.env.INDEX || "dev",
};
