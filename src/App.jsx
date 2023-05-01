import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './main.css'

function App() {
  const [books, setBooks] = useState([])
  console.log(books) // after BookCreate state changes to [{}] like normal api calls

  const bookListMapped = books.map(item => {
    return (
      <BookList
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='app'>
      <BookCreate
        newBooks={setBooks}
        oldBooks={books}
      />
      {/* <h2>{books}</h2> */}
      {bookListMapped}
    </div>
  )
}

export default App
