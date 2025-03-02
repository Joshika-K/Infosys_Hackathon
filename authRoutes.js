const express = require("express");
const User = require("../models/User");

const router = express.Router();

// ✅ Dashboard Route (No Authentication Required)
router.get("/dashboard", async (req, res) => {
    try {
        res.json({ message: "Welcome to the dashboard!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

