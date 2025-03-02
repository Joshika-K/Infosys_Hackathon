const mongoose = require('mongoose');  // Import Mongoose
const SIPSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    monthlyInvestment: Number,
    rateOfReturn: Number,
    tenure: Number,
    maturityValue: Number
});

module.exports = mongoose.model('SIP', SIPSchema);