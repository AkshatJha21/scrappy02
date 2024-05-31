import React, { useState } from 'react'
import axios from "axios"
import './allExpenses.css'
import EditExpense from './EditExpense';

const AllExpenses = ({ expenses, filterCategory }) => {
    const [currentExpense, setCurrentExpense] = useState(null);

    const handleEditClick = (expense) => {
        setCurrentExpense(expense);
    }

    const handleClose = () => {
        setCurrentExpense(null);
    }

    const filteredExpenses = filterCategory ? expenses.filter(expense => expense.category === filterCategory) : expenses;
  return (
    <>
        {currentExpense && (
            <EditExpense expense={currentExpense} closeDialog={handleClose}/>
        )}
        <div className='listBox'>
            {filteredExpenses.map((expense, index) => {
                return (
                    <div className='card' key={index}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h3 className='expTitle'>{expense.title}</h3>
                            <button className='editBtn' onClick={() => handleEditClick(expense)}>Edit</button>
                        </div>
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
    </>
  )
}

export default AllExpenses