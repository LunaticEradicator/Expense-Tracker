import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import ExpenseEachRepeating from './ExpenseMultiple'


export default function ItemDateHeading(props) {
    // console.log(props.showDailyExpense)
    const { books } = useCustomBookContext();
    const changeDateFormatIND = props.repeatingDate.split('-').reverse().join('-');

    const renderDailyExpense = props.showDailyExpense.map((item, index) => {
        return (
            props.repeatingDate === item.date &&
            <div key={index} className="showDailyExpense">
                {/* <img src={expenseIcon} alt="expenseIcon" /> */}
                <h2 style={{ color: "red", fontWeight: 'bolder' }}>	&darr;{item.expense}</h2>
            </div>
        )
    })

    const renderDailyIncome = props.showDailyIncome.map((item, index) => {
        return (
            props.repeatingDate === item.date && <h2 key={index} style={{ color: "green" }}> &uarr;{item.income}</h2>
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
        props.minimizeMultiple &&
        <div className="expenseEachRepeatingHeader"  >
            <div className="repeatingValue">
                <div className="repeatingValue-child">
                    {renderDailyIncome}
                    {renderDailyExpense}
                </div>
                <h2 className="expenseEachRepeatingHeader-date">{changeDateFormatIND}</h2> {/* reverse to dd-mm-yy format */}
            </div>
            {renderedBookListDuplicate}
        </div>
    )
}