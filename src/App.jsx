import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './main.css'

function App() {
  const [books, setBooks] = useState([])

  console.log(`------This is Book List--------`) // after BookCreate state changes to [{}] like normal api calls
  console.log(books) // after BookCreate state changes to [{}] like normal api calls


  // For Remove and edit we create a handleFunction which then we then send as props to the corresponding component [BookEach - delete && BookEdit - edit]
  const removeBook = (id) => {
    setBooks(prevBooks => prevBooks.filter(item => {
      return id !== item.id
    }))
  }

  const editBook = (id, newTitle) => {
    setBooks(prevBooks => prevBooks.map(item => {
      return item.id === id ? { ...item, title: newTitle } : item
    }))
  }

  return (
    <div className='app'>
      <BookCreate
        newBooks={setBooks}
        oldBooks={books}
      />
      <BookList
        books={books}
        removeBook={removeBook}
        editBook={editBook}
      />
    </div>
  )
}

export default App
