import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Expenses from "./components/ExpenseTracker";
import Planning from "./components/FinancialPlanning";
import SIP from "./components/SIPCalculator";
import EMI from "./components/EMICalculator";
import Investments from "./components/Investments";
import Budget from "./components/BudgetPlanner";
import Education from "./components/EducationalResources";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/financial-planning" element={<Planning />} />
      <Route path="/sip-calculator" element={<SIP />} />
      <Route path="/emi-calculator" element={<EMI />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/budget-planner" element={<Budget />} />
      <Route path="/educational-resources" element={<Education />} />
    </Routes>
  );
};

export default App;





