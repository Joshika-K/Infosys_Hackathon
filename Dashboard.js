import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css"; // ✅ Import CSS Module

const features = [
  { name: "Expense Tracker", path: "/expenses", icon: "📊" },
  { name: "Financial Planning", path: "/financial-planning", icon: "📑" },
  { name: "SIP Calculator", path: "/sip-calculator", icon: "📈" },
  { name: "EMI Calculator", path: "/emi-calculator", icon: "💰" },
  { name: "Investment Portfolio", path: "/investments", icon: "📉" },
  { name: "Budgeting Tools", path: "/budget-planner", icon: "📅" },
  { name: "Education", path: "/educational-resources", icon: "📚" },
];

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>💡 Financial Dashboard</h1>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <Link key={index} to={feature.path} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h2 className={styles.cardTitle}>{feature.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;



