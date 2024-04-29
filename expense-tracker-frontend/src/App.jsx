import { useEffect, useState } from 'react'
import './App.css'
import AddExpense from './components/AddExpense'
import AllExpenses from './components/AllExpenses'
import axios from 'axios';

function App() {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/all").then(function (res) {
      const allExpenses = res.data.expenses;
      setExpense(allExpenses);
    }).catch(function (err) {
      console.error(err);
    })
  }, []);

  return (
    <div>
      <AddExpense />
      <AllExpenses key={expense._id} expenses={expense}/>
    </div>
  )
}

export default App
