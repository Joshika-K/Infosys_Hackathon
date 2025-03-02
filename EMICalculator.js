import React, { useState } from "react";
import styles from "./EMICalculator.module.css"; // Importing CSS Module

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) {
      alert("Please fill all fields!");
      return;
    }

    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly Interest Rate
    const n = parseFloat(loanTenure) * 12; // Total Months

    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1); // EMI Formula

    setEmi(formatCurrency(EMI));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🏡 EMI Calculator (₹)</h1>
      <div className={styles.form}>
        <label>Loan Amount (₹):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter rate (e.g., 10)"
        />

        <label>Loan Tenure (Years):</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          placeholder="Enter years"
        />

        <button className={styles.calculateBtn} onClick={calculateEMI}>
          Calculate
        </button>
      </div>

      {emi && (
        <div className={styles.result}>
          <h2>EMI Amount: {emi} / month</h2>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;


