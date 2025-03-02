const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Mock AI Function (Replace with real AI model later)
const generateAIResponse = async (query) => {
  // Connect to AI model (e.g., OpenAI, TensorFlow, etc.)
  // For now, just simulating AI output based on query
  return `AI-generated response for: ${query}`;
};

// AI-based API routes
app.post("/api/ai/expenses", async (req, res) => {
  const response = await generateAIResponse("expense analysis");
  res.json({ result: response });
});

app.post("/api/ai/sip", async (req, res) => {
  const response = await generateAIResponse("SIP investment planning");
  res.json({ result: response });
});

app.post("/api/ai/investments", async (req, res) => {
  const response = await generateAIResponse("investment portfolio optimization");
  res.json({ result: response });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

