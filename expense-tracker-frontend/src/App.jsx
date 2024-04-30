import { useEffect, useState } from 'react'
import './App.css'
import AddExpense from './components/AddExpense'
import AllExpenses from './components/AllExpenses'
import axios from 'axios';

function App() {
  const [expense, setExpense] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/all").then(function (res) {
      const allExpenses = res.data.expenses;
      setExpense(allExpenses);
    }).catch(function (err) {
      console.error(err);
    })
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div>
      <AddExpense />
      <div>
        <label htmlFor="categoryFilter">Filter by Category:</label>
          <select id="categoryFilter" onChange={handleFilter}>
            <option value="">All</option>
            {['Food', 'Transportation', 'Utilities', 'Entertainment'].map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
      </div>
      <AllExpenses key={expense._id} expenses={expense} filterCategory={filter}/>
    </div>
  )
}

export default App
