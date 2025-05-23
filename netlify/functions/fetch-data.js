const fetch = require("node-fetch"); // Only needed if you're calling external APIs

exports.handler = async function (event, context) {
  const data = {
    message: "Hello from Netlify Functions!",
    timestamp: new Date().toISOString(),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
