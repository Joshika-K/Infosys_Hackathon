import React, { useState } from "react";

const Expenses = () => {
  const [aiResponse, setAiResponse] = useState("");

  const fetchAIInsights = async () => {
    const response = await fetch("http://localhost:5000/api/ai/expenses");
    const data = await response.json();
    setAiResponse(data.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">📊 Expense Tracker</h1>
      <button onClick={fetchAIInsights} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Get AI Insights
      </button>
      {aiResponse && <p className="mt-4">{aiResponse}</p>}
    </div>
  );
};

export default Expenses;
