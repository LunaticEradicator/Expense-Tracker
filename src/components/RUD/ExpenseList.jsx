import BookEach from './BookEach'
import useCustomBookContext from "../../hooks/use-custom-book-context"


export default function BookList() {
    const { books } = useCustomBookContext()

    const renderedBookList = books.map(book => { // map each books 
        console.log(book.expense)
        return < BookEach
            key={book.id}
            {...book}
        />
    })

    return (
        <div className="bookList">
            {renderedBookList}
        </div>
    )

} 