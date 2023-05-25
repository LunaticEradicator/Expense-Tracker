import { useState } from 'react'

import ExpenseSingle from './ExpenseListChildren/ExpenseSingle/ExpenseSingle'
import useCustomExpenseContext from "../../hooks/use-custom-expense-context"
import ExpenseMultipleHeader from './ExpenseListChildren/ExpenseMultiple/ExpenseMultipleHeader'

import hideIcon from '../../image/hide.png'
import showIcon from '../../image/show.png'

export default function ExpenseList() {
    const { expense } = useCustomExpenseContext();

    // minimize singleExpense and MultipleExpense
    const [minimizeSingle, setMinimizeSingle] = useState(true)
    const [minimizeMultiple, setMinimizeMultiple] = useState(true)

    function minimizeExpenseSingle() {
        setMinimizeSingle(prevMinimizeSingle => !prevMinimizeSingle)
    }

    function minimizeExpenseMultiple() {
        setMinimizeMultiple(prevMinimizeMultiple => !prevMinimizeMultiple)
    }


    // get Items If they have the same date 
    const getAllDate = expense.map(item => {
        return item.date
    })

    const getRepeatingDate = getAllDate.filter((item, index) => getAllDate.indexOf(item) !== index) // ---get duplicateDate from allDate
    const repeatingDate = getRepeatingDate.filter((item, index) => getRepeatingDate.indexOf(item) === index) // prevent showRepeatingDate from being duplicating


    // get Items based on the same date and get it's  daily expense [for multipleExpense ]
    const allExpense = expense.map(item => {
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



    // Group Items on basis of date and get there daily income [for multipleExpense ]
    const allIncome = expense.map(item => {
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



    // mapping EachExpense and MultipleExpense component 
    const renderExpenseEachNew = expense.map(expense => {
        return < ExpenseSingle
            key={expense.id}
            repeatingDate={repeatingDate}
            {...expense}
            minimizeSingle={minimizeSingle}
        />
    })

    const renderExpenseEachRepeatingHeader = repeatingDate.map((itemDate, index) => {
        return <ExpenseMultipleHeader
            key={index}
            repeatingDate={itemDate}
            showDailyExpense={showDailyExpense}
            showDailyIncome={showDailyIncome}
            minimizeMultiple={minimizeMultiple}
        />
    })

    return (
        < div className="expenseList" >

            <div className='singleExpense'>
                <div className='singleExpense-title'>
                    <h2 style={{ color: ' rgb(21, 224, 157)' }} >Single Expense</h2>
                    <div className='singleExpense-title-icon-div'>
                        <img onClick={minimizeExpenseSingle} className='singleExpense-title-icon' src={minimizeSingle ? showIcon : hideIcon} alt="hideIcon" />
                    </div>
                </div>
                {renderExpenseEachNew}

            </div>

            {repeatingDate.length !== 0 && // only display multipleExpense if it's array is not empty
                <div className='multipleExpense'>
                    <div className='multipleExpense-title'>
                        <h2 style={{ color: ' rgb(21, 224, 157)' }} >Multiple Expenses</h2>
                        <div className='multipleExpense-title-icon-div'>
                            <img onClick={minimizeExpenseMultiple} className='multipleExpense-title-icon' src={minimizeMultiple ? showIcon : hideIcon} alt="hideIcon" />
                        </div>
                    </div>
                    {renderExpenseEachRepeatingHeader}
                </div>
            }

        </div >
    )

}
