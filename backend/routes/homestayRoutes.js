const express = require("express");
const router = express.Router();

const {
  createHomestay,
  getAllHomestays,
} = require("../controllers/homestayController");

// Routes
router.post("/", createHomestay);
router.get("/", getAllHomestays);

module.exports = router;