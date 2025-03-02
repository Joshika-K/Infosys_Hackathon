import React, { useState } from "react";
import styles from "./BudgetPlanner.module.css"; // Import CSS Module

const BudgetPlanner = () => {
  const [income, setIncome] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const addCategory = () => {
    if (categoryName && budgetAmount) {
      setCategories([
        ...categories,
        { name: categoryName, budget: parseFloat(budgetAmount), spent: 0 },
      ]);
      setCategoryName("");
      setBudgetAmount("");
    }
  };

  const updateSpent = (index, amount) => {
    const updatedCategories = [...categories];
    updatedCategories[index].spent += parseFloat(amount) || 0;
    setCategories(updatedCategories);
  };

  const totalBudget = categories.reduce((acc, cat) => acc + cat.budget, 0);
  const totalSpent = categories.reduce((acc, cat) => acc + cat.spent, 0);
  const remainingBalance = income - totalSpent;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Budget Planner</h2>

      {/* Income Input */}
      <div className={styles.inputGroup}>
        <label>Monthly Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
          className={styles.input}
          placeholder="Enter your income"
        />
      </div>

      {/* Add Budget Categories */}
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          className={styles.input}
        />
        <input
          type="number"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(e.target.value)}
          placeholder="Budget Amount (₹)"
          className={styles.input}
        />
        <button onClick={addCategory} className={styles.button}>
          Add
        </button>
      </div>

      {/* Budget Overview */}
      <div className={styles.totalBudget}>
        <p><strong>Total Budget:</strong> ₹{totalBudget.toFixed(2)}</p>
        <p><strong>Total Spent:</strong> ₹{totalSpent.toFixed(2)}</p>
        <p><strong>Remaining Balance:</strong> ₹{remainingBalance.toFixed(2)}</p>
      </div>

      {/* Budget Categories List */}
      {categories.map((cat, index) => (
        <div key={index} className={styles.budgetCard}>
          <h4>{cat.name}</h4>
          <p>Budget: ₹{cat.budget.toFixed(2)}</p>
          <p>Spent: ₹{cat.spent.toFixed(2)}</p>

          {/* Progress Bar */}
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${(cat.spent / cat.budget) * 100}%` }}
            ></div>
          </div>

          {/* Expense Input */}
          <input
            type="number"
            placeholder="Add Expense"
            className={styles.expenseInput}
            onBlur={(e) => updateSpent(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default BudgetPlanner;

