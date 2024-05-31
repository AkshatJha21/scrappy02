import axios from 'axios';
import React, { useState } from 'react'

const EditExpense = ({ expense, closeDialog }) => {
    const [title, setTitle] = useState(expense.title);
    const [amount, setAmount] = useState(expense.amount);
    const [category, setCategory] = useState(expense.category);

    const handleUpdate = () => {
        const amt = parseFloat(amount);
        axios.put("http://localhost:3000/edit", {
            id: expense._id,
            title,
            category,
            amount: amt
        }).then((res) => {
            console.log("Expense updated successfully");
            closeDialog();
            window.location.reload();
        }).catch((err) => {
            console.log("Error: ", err);
        });
    }

  return (
    <div className='dialog'>
        <div className='dialog-content'>
            <h2>Update Expense</h2>
            <div className='dialog-inputs'>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <select
                    className='categorySelector'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div className='dialog-actions'>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={closeDialog}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default EditExpense