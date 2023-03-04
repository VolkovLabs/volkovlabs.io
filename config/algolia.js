/**
 * Algolia Search
 */
const algolia = {
  appId: process.env.APPID ?? "dev",
  apiKey: process.env.APIKEY ?? "dev",
  indexName: process.env.INDEX ?? "dev",
};

module.exports = algolia;
