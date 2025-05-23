const express = require("express");
const cors = require("cors");
const apiRouter = require("./api");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", apiRouter);

// Frontend routes (if serving frontend)
app.get("/", (req, res) => {
  res.send("Welcome to the API Server");
});

// 404 Catch-All for non-API routes
app.use((req, res) => {
  res.status(404).send(`
    <h1>Page Not Found</h1>
    <p>The requested URL ${req.url} was not found on this server.</p>
    <p>Try our <a href="/api">API endpoints</a> instead.</p>
  `);
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Global Error:", err);

  if (req.xhr || req.headers.accept.includes("json")) {
    // API error response
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  } else {
    // HTML error response
    res.status(500).send(`
      <h1>Server Error</h1>
      <p>Something went wrong on our end.</p>
      ${process.env.NODE_ENV === "development" ? `<pre>${err.stack}</pre>` : ""}
    `);
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
