import React, { useState } from 'react'
import './addExpense.css'

const AddExpense = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);

  return (
    <div className='container'>
        <input type="text" placeholder='Title' onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value);
        }}/>
        <select name="category" id="category" onChange={(e) => {
            const value = e.target.value;
            setCategory(e.target.value);
        }}>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="grocery">Grocery</option>
            <option value="other">Other</option>
        </select>
        <input type="number" placeholder='Amount' onChange={(e) => {
            const value = e.target.value;
            setAmount(e.target.value);
        }}/>
        <button onClick={() => {
            fetch("http://localhost:3000/new", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    category: category,
                    amount: amount
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function (res) {
                await res.json();
                console.log("Expense added");
            })
        }}>Add Expense</button>
    </div>
  )
}

export default AddExpense