import './main.css'
import { useEffect } from 'react';
import useCustomBookContext from "./hooks/use-custom-expense-context"

import ExpenseList from './components/RUD/ExpenseList';
import ExpenseDetails from './components/RUD/ExpenseDetails';
import AddExpenseAndIncome from './components/Create/AddExpenseAndIncome'

export default function App() {
  const { fetchData } = useCustomBookContext()

  useEffect(() => { // to get of all the books [get]
    fetchData();
  }, [fetchData])

  return (
    <div className='app'>
      <h1 className='app-Title'>Expense Tracker</h1>
      <AddExpenseAndIncome />    {/* Add button */}
      <div className='app-content'>
        <ExpenseDetails />       {/* Expense Details */}
        <ExpenseList />          {/* All Expenses */}
      </div>
    </div>
  )
}


