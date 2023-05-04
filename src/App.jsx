import './main.css'
import { nanoid } from "nanoid"
import axios from 'axios';
import { useState, useEffect } from 'react';


import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([])

  const fetchAPi = async () => {
    const response = await axios.get("http://localhost:8000/books")
    setBooks(response.data)
  }

  useEffect(() => { // to get of all the books [get]
    fetchAPi();
  }, [])


  const createBook = async (newBookName) => { // to add new books [post]
    const response = await axios.post("http://localhost:8000/books", {
      title: newBookName
    })
    setBooks([...books, response.data]) // response.data is the data we are storing [see db.json]
    console.log(response)
  }


  const removeBookById = async (id) => {
    await axios.delete(`http://localhost:8000/books/${id}`)

    setBooks(prevBooks => prevBooks.filter(item => {
      return item.id !== id
    }))
  }

  const editBookByID = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:8000/books/${id}`, {
      title: newTitle
    })
    setBooks(prevBooks => prevBooks.map(item => {
      // return item.id === id ? { ...item, title: newTitle } : item // instead of getting just one updated value [title]
      return item.id === id ? { ...item, ...response.data } : item // return every new value [response.data] // better for large scale productions
    }))
  }


  console.log(`------This is Book List--------`) // after BookCreate state changes to [{}] like normal api calls
  console.log(books) // after BookCreate state changes to [{}] like normal api calls

  return (
    <div className='app'>
      <BookCreate
        handleCreate={createBook}
        oldBooks={books}
      />
      <BookList
        books={books}
        handleRemoveBookById={removeBookById}
        handleEditBookByID={editBookByID}
      // handleToggle={toggleEdits}
      />
    </div>
  )
}


  // const createBook = (newBookName) => {
  //   // setBook(...book,{ id: nanoid(), title: eachBookName }) same as below
  //   setBooks([...books, { id: nanoid(), title: newBookName }]) // crud using react
  // }

// const removeBook = (id) => { // to remove the book [delete]
//   setBooks(prevBooks => prevBooks.filter(item => {
//     return id !== item.id
//   }))
// }

// const editBook = (id, newTitle) => {
//   setBooks(prevBooks => prevBooks.map(item => {
//     return item.id === id ? { ...item, title: newTitle } : item
//   }))
// }