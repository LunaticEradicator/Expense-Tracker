import './main.css'
import { useEffect } from 'react';
import useCustomBookContext from "./hooks/use-custom-book-context"

import ExpenseList from './components/RUD/ExpenseList';
import AddItem from './components/Create/AddItem'
import ExpenseDetails from './components/RUD/ExpenseDetails';

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
      <AddItem />
    </div>
  )
}


