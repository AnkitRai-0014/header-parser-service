const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ optionsSuccessStatus: 200 })); // FCC tests use remote requests

// Root (optional)
app.get("/", (req, res) => {
  res.send("Request Header Parser Microservice is running!");
});

// ✅ Your API endpoint
app.get("/api/whoami", (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  const language = req.get("Accept-Language");
  const software = req.get("User-Agent");

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
