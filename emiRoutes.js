const express = require("express");
const router = express.Router();

router.post("/calculate-emi", (req, res) => {
    const { amount, interest, tenure } = req.body;

    if (!amount || !interest || !tenure) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const monthlyInterest = interest / (12 * 100);
    const emi = (amount * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
                (Math.pow(1 + monthlyInterest, tenure) - 1);

    res.json({ emi: emi.toFixed(2) });
});

module.exports = router;
