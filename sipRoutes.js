const express = require("express");
const SIP = require("../models/SIP");

const router = express.Router();

// Add SIP Details
router.post("/add", async (req, res) => {
    try {
        const sip = new SIP(req.body);
        await sip.save();
        res.status(201).json({ message: "SIP details added successfully", sip });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All SIPs
router.get("/", async (req, res) => {
    try {
        const sips = await SIP.find();
        res.json(sips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
