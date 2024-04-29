import React from 'react'

const AllExpenses = ({ expenses }) => {
  return (
    <div>
        {expenses.map((expense) => {
            return (
                <>
                    <h3>{expense.title}</h3>
                    <p>{expense.category}</p>
                    <p>{expense.amount}</p>
                </>
            )
        })}
    </div>
  )
}

export default AllExpenses