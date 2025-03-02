const mongoose = require('mongoose');  // Import Mongoose


const InvestmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: String,
    amount: Number,
    returns: Number,
    duration: Number
});

module.exports = mongoose.model('Investment', InvestmentSchema);