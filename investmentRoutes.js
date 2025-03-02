const express = require("express");
const Investment = require("../models/Investment");

const router = express.Router();

// Add an Investment
router.post("/add", async (req, res) => {
    try {
        const investment = new Investment(req.body);
        await investment.save();
        res.status(201).json({ message: "Investment added successfully", investment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Investments
router.get("/", async (req, res) => {
    try {
        const investments = await Investment.find();
        res.json(investments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
