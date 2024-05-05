import React from 'react'
import axios from "axios"
import './allExpenses.css'

const AllExpenses = ({ expenses, filterCategory }) => {
    const filteredExpenses = filterCategory ? expenses.filter(expense => expense.category === filterCategory) : expenses;
  return (
    <div className='listBox'>
        {filteredExpenses.map((expense, index) => {
            return (
                <div className='card' key={index}>
                    <h3 className='expTitle'>{expense.title}</h3>
                    <p className='expCategory'>{expense.category}</p>
                    <div className='bottom'>
                        <p className='amt'>Rs. {expense.amount}</p>
                        <button className='deleteBtn' onClick={() => {
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
                </div>
            )
        })}
    </div>
  )
}

export default AllExpenses