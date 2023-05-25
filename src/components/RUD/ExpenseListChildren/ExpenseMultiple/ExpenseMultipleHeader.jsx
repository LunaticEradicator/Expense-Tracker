import useCustomExpenseContext from "../../../../hooks/use-custom-expense-context"
import ExpenseMultiple from './ExpenseMultiple'


export default function ExpenseMultipleHeader(props) {
    const { expense } = useCustomExpenseContext();
    const changeDateFormatIND = props.repeatingDate.split('-').reverse().join('-');

    // Add expense of item if they are of the same date [daily Expense]
    const renderDailyExpense = props.showDailyExpense.map((item, index) => {
        return (
            props.repeatingDate === item.date &&
            <div key={index} className="showDailyExpense">
                <h2 style={{ color: "red", fontWeight: 'bolder' }}>	&darr;{item.expense}</h2>
            </div>
        )
    })

    // Add income of item if they are of the same date [daily Income]
    const renderDailyIncome = props.showDailyIncome.map((item, index) => {
        return (
            props.repeatingDate === item.date && <h2 key={index} style={{ color: "green" }}> &uarr;{item.income}</h2>
        )
    })

    // render each expense 
    const renderedExpenseMultiple = expense.map(expense => {
        return < ExpenseMultiple
            key={expense.id}
            repeatingDate={props.repeatingDate}
            {...expense}
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
            {renderedExpenseMultiple}
        </div>
    )
}