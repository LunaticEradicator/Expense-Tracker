import BookEach from "./BookEach"
import useCustomBookContext from "../hooks/use-custom-book-context"

export default function BookList() {
    // console.log(props.booksToMap)
    const { books } = useCustomBookContext()
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