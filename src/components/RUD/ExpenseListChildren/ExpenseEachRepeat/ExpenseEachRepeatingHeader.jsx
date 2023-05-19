import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import ExpenseEachRepeating from './ExpenseEachRepeating'
// import DailyExpense from "./DailyExpense";

export default function ItemDateHeading(props) {
    // console.log(props.showDailyExpense)
    const { books } = useCustomBookContext();
    const changeDateFormatIND = props.repeatingDate.split('-').reverse().join('-');

    const renderDailyExpense = props.showDailyExpense.map(item => {
        return (
            props.repeatingDate === item.date && <h2 style={{ color: "red" }}>-{item.expense}</h2>
        )
    })

    const renderedBookListDuplicate = books.map(book => { // map each books 
        return < ExpenseEachRepeating
            key={book.id}
            repeatingDate={props.repeatingDate}
            {...book}
        />
    })

    return (
        <div className="expenseEachRepeatingHeader"  >
            <div className="repeatingValue">
                {renderDailyExpense}
                <h1>{changeDateFormatIND}</h1>{/* reverse to dd-mm-yy format */}
            </div>
            {renderedBookListDuplicate}
            {/* {props.repeatingDate && props.renderDailyExpense} */}
        </div>
    )
}