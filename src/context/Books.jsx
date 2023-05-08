import { useState, createContext, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([])

    const fetchApi = useCallback(async () => {
        const response = await axios.get("http://localhost:8000/books")
        setBooks(response.data)
    }, [])


    const createBook = async (itemTitle, itemDate, itemExpense, itemIncome) => { // to add new books [post] 
        const response = await axios.post("http://localhost:8000/books", {
            title: itemTitle,
            date: itemDate,
            expense: itemExpense,
            income: itemIncome
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

    const editBookById = async (id, editTitle, editDate, editExpense, editIncome) => {
        const response = await axios.put(`http://localhost:8000/books/${id}`, {
            title: editTitle,
            date: editDate,
            expense: editExpense,
            income: editIncome,
        })
        setBooks(prevBooks => prevBooks.map(item => {
            // return item.id === id ? { ...item, title: newTitle } : item // instead of getting just one updated value [title]
            return item.id === id ? { ...item, ...response.data } : item // return every new value [response.data] // better for large scale productions
        }))
    }

    const valueToBeUsed = {
        books,
        fetchApi,
        createBook,
        removeBookById,
        editBookById,
    }

    return (
        <BookContext.Provider value={valueToBeUsed}>
            {children}
        </BookContext.Provider >
    )
}

export default BookContext
export { Provider }

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