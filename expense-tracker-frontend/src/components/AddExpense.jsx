import React, { useState } from 'react'
import './addExpense.css'

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  return (
    <div className='container'>
      <input type="text" placeholder='Title' onChange={(e) => {
        setTitle(e.target.value);
      }}/>
      <div className='categorySelector'>
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={(e) => {
          setCategory(e.target.value);
        }}>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
      </div>
      <input type="number" placeholder='Amount' onChange={(e) => {
        setAmount(e.target.value);
      }}/>
      <button onClick={() => {
        console.log(category);
        console.log(title);
        console.log(amount);
        fetch("http://localhost:3000/new", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            category: category,
            amount: amount
          }),
          headers: {
            "Content-type": "application/json",
            "Content-length": 0
            // CHECK CONTENT-LENGTH AND SELECT TAG ERRORS ON INTERNET
          }
        }).then(async function (res) {
          await res.json();
          console.log("Expense added successfully");
        })
      }}>Add Expense</button>
    </div>
  )
}

export default AddExpense