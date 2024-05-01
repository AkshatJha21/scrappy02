import React from 'react'
import axios from "axios"

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
                    {/* SAMPLE FUNCTION */}
                    <button onClick={() => {
                        axios.delete("http://localhost:3000/remove", {
                            data: {
                                id: expense._id
                            }
                        })
                        .then(function (res) {
                            console.log("Todo deleted");
                            window.location.reload();
                        })
                        .catch(function (error) {
                            console.error("Error deleting todo:", error);
                        });
                    }}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default AllExpenses