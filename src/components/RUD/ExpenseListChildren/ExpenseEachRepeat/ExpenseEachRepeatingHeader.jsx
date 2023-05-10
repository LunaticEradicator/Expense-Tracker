import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import DuplicateItem from './DuplicateItem'

export default function ItemDateHeading(props) {
    const { books } = useCustomBookContext();

    const renderedBookListDuplicate = books.map(book => { // map each books 
        return < DuplicateItem
            key={book.id}
            repeatingDate={props.repeatingDate}
            date={props.date}
            {...book}
        />
    })

    const styles = { border: '1px solid red', borderRadius: '10px', padding: '10px' }
    return (
        <div style={styles} >
            <h1 >{props.repeatingDate}</h1>
            {renderedBookListDuplicate}
        </div>
    )
}