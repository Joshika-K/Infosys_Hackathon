import React, { useState } from "react";
import styles from "./SIPCalculator.module.css"; // Importing CSS Module

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const calculateSIP = () => {
    if (!monthlyInvestment || !interestRate || !timePeriod) {
      alert("Please fill all fields!");
      return;
    }

    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly Interest Rate
    const n = parseFloat(timePeriod) * 12; // Total Months

    const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r); // SIP Future Value Formula

    setFutureValue(formatCurrency(FV));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>📈 SIP Calculator (₹)</h1>
      <div className={styles.form}>
        <label>Monthly Investment (₹):</label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          placeholder="Enter amount"
        />

        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter rate (e.g., 12)"
        />

        <label>Time Period (Years):</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          placeholder="Enter years"
        />

        <button className={styles.calculateBtn} onClick={calculateSIP}>
          Calculate
        </button>
      </div>

      {futureValue && (
        <div className={styles.result}>
          <h2>Future Value: {futureValue}</h2>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;

