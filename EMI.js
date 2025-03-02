const mongoose = require('mongoose');  // Import Mongoose
const EMISchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    loanAmount: Number,
    interestRate: Number,
    tenure: Number,
    emiAmount: Number
});

module.exports = mongoose.model('EMI', EMISchema);
