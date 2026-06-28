const Homestay = require("../models/Homestay");

// Create Homestay
const createHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.create(req.body);

    res.status(201).json({
      success: true,
      data: homestay,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Homestays
const getAllHomestays = async (req, res) => {
  try {
    const homestays = await Homestay.find();

    res.status(200).json({
      success: true,
      count: homestays.length,
      data: homestays,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createHomestay,
  getAllHomestays,
};