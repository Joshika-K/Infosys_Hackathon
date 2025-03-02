const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// Add an Expense
router.post("/add", async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json({ message: "Expense added successfully", expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
