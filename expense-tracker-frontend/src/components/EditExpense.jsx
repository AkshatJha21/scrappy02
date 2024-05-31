import React, { useState } from 'react'

const EditExpense = ({ expense, closeDialog }) => {
    const [title, setTitle] = useState(expense.title);
    const [description, setDescription] = useState(expense.description);
    const [category, setCategory] = useState(expense.category);
    
  return (
    <div className='dialog'>
        <div className='dialog-content'>
            <h2>Update Expense</h2>
            <div className='dialog-inputs'>
                <input type="text" />
                <select></select>
                <input type="text" />
            </div>
            <div className='dialog-actions'>
                <button>Update</button>
                <button onClick={closeDialog}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default EditExpense