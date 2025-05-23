const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "your_project_id",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN, // Set this in Netlify's Environment Variables
});
