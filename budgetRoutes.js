const express = require("express");
const Budget = require("../models/Budget");

const router = express.Router();

// Set Budget
router.post("/set", async (req, res) => {
    try {
        const budget = new Budget(req.body);
        await budget.save();
        res.status(201).json({ message: "Budget set successfully", budget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Budget Details
router.get("/", async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
