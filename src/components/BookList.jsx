import BookEach from "./BookEach"

export default function BookList(props) {
    // console.log(props.booksToMap)

    const renderedBooks = props.books.map(book => { // map each books 
        return < BookEach
            key={book.id}
            {...book}
            handleRemoveBook={props.removeBook}
            handleEditBook={props.editBook}
        />
    })

    return (
        <div className="bookList">
            {renderedBooks}
        </div>
    )

} 