import React, { useState } from 'react'
import './addExpense.css'

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    // INPUT FIELDS TO BE ADDED
    // CAUTION: SELECT CATEGORY NOT WORKING LAST TIME EVEN THOUGH ROUTES ARE WORKING
    <div className='container'>
      <input type="text" placeholder='Title' onChange={(e) => {
        setTitle(e.target.value);
      }}/>
      <input type="number" placeholder='Amount' onChange={(e) => {
        setAmount(e.target.value);
      }}/>
      <button>Add Expense</button>
    </div>
  )
}

export default AddExpense