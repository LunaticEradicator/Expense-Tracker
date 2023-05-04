import BookEach from "./BookEach"

export default function BookList(props) {
    // console.log(props.booksToMap)

    const renderedBooks = props.books.map(book => { // map each books 
        return < BookEach
            key={book.id}
            {...book}
            handleRemoveBookById={props.handleRemoveBookById}
            handleEditBookByID={props.handleEditBookByID}
        // handleToggle={props.handleToggle}
        />
    })

    return (
        <div className="bookList">
            {renderedBooks}
        </div>
    )

} 