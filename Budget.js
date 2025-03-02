const mongoose = require('mongoose');  // Import Mongoose
const BudgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    income: Number,
    expenses: Number,
    savingsGoal: Number
});

module.exports = mongoose.model('Budget', BudgetSchema);