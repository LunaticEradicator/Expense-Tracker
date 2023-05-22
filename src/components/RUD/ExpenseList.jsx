import ExpenseEachNew from './ExpenseListChildren/ExpenseSingle/ExpenseSingle'
import useCustomBookContext from "../../hooks/use-custom-book-context"
import ExpenseEachRepeatingHeader from './ExpenseListChildren/ExpenseMultiple/ExpenseMultipleHeader'
import { useState } from 'react'

import hideIcon from '../../image/hide.png'
import showIcon from '../../image/show.png'

export default function BookList() {
    const { books } = useCustomBookContext();

    const [minimizeSingle, setMinimizeSingle] = useState(false)
    const [minimizeMultiple, setMinimizeMultiple] = useState(false)

    function minimizeExpenseSingle() {
        setMinimizeSingle(prevMinimizeSingle => !prevMinimizeSingle)
    }
    function minimizeExpenseMultiple() {
        setMinimizeMultiple(prevMinimizeMultiple => !prevMinimizeMultiple)
    }

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
            minimizeSingle={minimizeSingle}
        />
    })

    const renderExpenseEachRepeatingHeader = repeatingDate.map((itemDate, index) => {
        return <ExpenseEachRepeatingHeader
            key={index}
            repeatingDate={itemDate}
            showDailyExpense={showDailyExpense}
            showDailyIncome={showDailyIncome}
            minimizeMultiple={minimizeMultiple}
        />
    })


    return (
        < div className="bookList" >
            <div className='singleExpense'>
                <div className='singleExpense-title'>
                    <h2 style={{ color: ' rgb(21, 224, 157)' }} >Single Expense</h2>
                    <img onClick={minimizeExpenseSingle} className='singleExpense-title-icon' src={minimizeSingle ? showIcon : hideIcon} alt="hideIcon" />
                </div>
                {renderExpenseEachNew}
            </div>
            <div className='multipleExpense'>
                <div className='multipleExpense-title'>
                    <h2 style={{ color: ' rgb(21, 224, 157)' }} >Multiple Expenses</h2>
                    <img onClick={minimizeExpenseMultiple} className='multipleExpense-title-icon' src={minimizeMultiple ? showIcon : hideIcon} alt="hideIcon" />
                </div>
                {renderExpenseEachRepeatingHeader}
            </div>
        </div >
    )

}
