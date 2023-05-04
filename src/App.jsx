import './main.css'
import { useEffect, useContext } from 'react';
import BookContext from './context/Books';


import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const { fetchApi } = useContext(BookContext)

  useEffect(() => { // to get of all the books [get]
    fetchApi();
  }, [])

  return (
    <div className='app'>
      <BookCreate />
      <BookList />
    </div>
  )
}


