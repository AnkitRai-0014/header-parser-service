const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));

// Root (optional)
app.get("/", (req, res) => {
  res.send("Request Header Parser Microservice is running!");
});

// ✅ FCC-required endpoint
app.get("/api/whoami", (req, res) => {
  // ✅ Get real IP address
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded ? forwarded.split(",")[0] : req.connection.remoteAddress;

  // ✅ Get language & software
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: language,
    software: software,
  });
});

// Listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
