import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import ExpenseEachRepeating from './ExpenseEachRepeating'

export default function ItemDateHeading(props) {
    const { books } = useCustomBookContext();

    const renderedBookListDuplicate = books.map(book => { // map each books 
        return < ExpenseEachRepeating
            key={book.id}
            repeatingDate={props.repeatingDate}
            date={props.date}
            {...book}
        />
    })

    return (
        <div className="expenseEachRepeatingHeader"  >
            <h1 >{props.repeatingDate.split('-').reverse().join('-')}</h1>{/* reverse to dd-mm-yy format */}
            {renderedBookListDuplicate}
        </div>
    )
}