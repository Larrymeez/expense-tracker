import React from "react";

const ExpenseTable = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <div className="table-wrapper">
    <table className="expense-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>${Number(expense.amount).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ExpenseTable;
