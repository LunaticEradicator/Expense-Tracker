import ExpenseEachNew from './ExpenseListChildren/ExpenseSingle/ExpenseSingle'
import useCustomBookContext from "../../hooks/use-custom-book-context"
import ExpenseEachRepeatingHeader from './ExpenseListChildren/ExpenseMultiple/ExpenseMultipleHeader'

export default function BookList() {
    const { books } = useCustomBookContext()

    const allDate = books.map(item => {
        return item.date
    })

    const showRepeatingDate = allDate.filter((item, index) => allDate.indexOf(item) !== index) // ---------------- shows duplicateDate from allDate
    const repeatingDate = showRepeatingDate.filter((item, index) => showRepeatingDate.indexOf(item) === index) // remove duplicate from showRepeatingDate


    const allExpense = books.map(item => {
        return repeatingDate.includes(item.date) ? { date: item.date, expense: item.expense } : { date: item.date, expense: item.expense }
    })

    const showDailyExpense = allExpense.reduce((accumulator, cur) => {
        cur.expense = parseInt(cur.expense)
        let repDate = cur.date;
        let found = accumulator.find(elem => elem.date === repDate)
        if (found) {
            found.expense += cur.expense;
        }
        else accumulator.push(cur);
        return accumulator;
    }, []);


    const allIncome = books.map(item => {
        return repeatingDate.includes(item.date) ? { date: item.date, income: item.income } : { date: item.date, income: item.income }
    })

    const showDailyIncome = allIncome.reduce((accumulator, cur) => {
        cur.income = parseInt(cur.income)
        let repDate = cur.date;
        let found = accumulator.find(elem => elem.date === repDate)
        if (found) {
            found.income += cur.income;
        }
        else accumulator.push(cur);
        return accumulator;
    }, []);

    // console.log(showDailyIncome)

    const renderExpenseEachNew = books.map(book => { // map each books 
        return < ExpenseEachNew
            key={book.id}
            repeatingDate={repeatingDate}
            {...book}
        />
    })

    const renderExpenseEachRepeatingHeader = repeatingDate.map((itemDate, index) => {
        return <ExpenseEachRepeatingHeader
            key={index}
            repeatingDate={itemDate}
            showDailyExpense={showDailyExpense}
            showDailyIncome={showDailyIncome}
        />
    })

    return (
        < div className="bookList" >
            <div className='singleExpense'>
                <h2>Single Expense</h2>
                {renderExpenseEachNew}
            </div>
            <div className='multipleExpense'>
                <h2>Multiple Expense</h2>
                {renderExpenseEachRepeatingHeader}
            </div>
        </div >
    )

}
