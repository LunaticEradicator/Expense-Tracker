import BookEach from "./BookEach"
import { useContext } from "react"
import BookContext from "../context/Books"

export default function BookList() {
    // console.log(props.booksToMap)
    const { books } = useContext(BookContext)
    const renderedBooks = books.map(book => { // map each books 
        return < BookEach
            key={book.id}
            {...book}
        />
    })

    return (
        <div className="bookList">
            {renderedBooks}
        </div>
    )

} 