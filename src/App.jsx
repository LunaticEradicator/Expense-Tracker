import './main.css'
import { useEffect } from 'react';
import useCustomBookContext from "./hooks/use-custom-book-context"

import ExpenseList from './components/RUD/ExpenseList';
import ExpenseDetails from './components/RUD/ExpenseDetails';
import AddExpenseAndIncome from './components/Create/AddExpenseAndIncome'

export default function App() {
  // const { fetchApi } = useContext(BookContext)
  const { fetchApi } = useCustomBookContext()

  useEffect(() => { // to get of all the books [get]
    fetchApi();
  }, [fetchApi])

  return (
    <div className='app'>
      <ExpenseDetails />
      <ExpenseList />
      <AddExpenseAndIncome />
    </div>
  )
}


