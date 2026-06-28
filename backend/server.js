const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const homestayRoutes = require("./routes/homestayRoutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/homestays", homestayRoutes);

const PORT = process.env.PORT || 5000;

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Homestay Booking Backend is Running 🚀",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});