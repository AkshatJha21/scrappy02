import React, { useState } from 'react'
import './addExpense.css'
import axios from "axios"

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value)
  }
  return (
    <div className='container'>
      <input type="text" placeholder='Title' onChange={(e) => {
        setTitle(e.target.value);
      }}/>
      <select
        value={category}
        onChange={handleChange}
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        {/* Add more options as needed */}
      </select>
      <input type="number" placeholder='Amount' onChange={(e) => {
        setAmount(e.target.value);
      }}/>
      <button onClick={() => {
        console.log(category);
        console.log(title);
        console.log(amount);
        axios.post("http://localhost:3000/new", {
          title: title,
          category: category,
          amount: amount
        }).then(function (res) {
          console.log("Expense added successfully");
        }).catch(function (err) {
          console.error("Error adding expense: ", err);
        });
      }}>Add Expense</button>
    </div>
  )
}

export default AddExpense