import React from 'react'

const AllExpenses = ({ expenses, filterCategory }) => {
    const filteredExpenses = filterCategory ? expenses.filter(expense => expense.category === filterCategory) : expenses;
  return (
    <div>
        {filteredExpenses.map((expense, index) => {
            return (
                <div key={index}>
                    <h3>{expense.title}</h3>
                    <p>{expense.category}</p>
                    <p>{expense.amount}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllExpenses