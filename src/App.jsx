import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // 🧠 Load expenses from localStorage on first render
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    console.log('Loaded from localStorage:', savedExpenses);
    if (savedExpenses && Array.isArray(savedExpenses)) {
      setExpenses(savedExpenses);
    }
  }, []);

  // 💾 Save expenses to localStorage whenever they change
  useEffect(() => {
    console.log('Saving to localStorage:', expenses);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    console.log('Adding expense:', expense);
    setExpenses((prev) => [...prev, expense]); // ✅ functional update
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

<div className="layout-container">
  <div className="form-modal">
    <ExpenseForm onAddExpense={handleAddExpense} />
  </div>

  <div className="table-modal">
    <ExpenseTable expenses={filteredExpenses} />
  </div>
</div>

    </div>
  );
}

export default App;
