import { useState } from "react"
import useCustomBookContext from "../../hooks/use-custom-book-context"
import useCurrentDate from "../../hooks/useCurrentDate"

export default function ExpenseCreate(props) {
    const { createBook } = useCustomBookContext()
    const currentDate = useCurrentDate(); // custom hook to get currentDate

    const [item, setItem] = useState({
        title: '',
        date: '',
        expense: ''
    }) // to have an controlled input


    const handleSubmit = (event) => { // to submit new book
        event.preventDefault()
        //createBook Fnc
        createBook(item.title, item.date, item.expense, 0) // 0 === income [add sum without showing Nan]
        // erase eachBookName after submit
        setItem(prevItem => {
            return { title: '', date: '', expense: '' }
        })
        // toggle off Create Children []
        props.setIsCreate(false)
    }

    const handleInput = (event) => { // to get userInput of the books title
        setItem(prevItem => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }
    return (
        <div className="expenseCreate">
            <button onClick={() => props.handleIsExpense()} className="expenseCreate-Button">Create Expense</button>
            {props.isExpense &&

                <div className="createForm-div">
                    <form onSubmit={handleSubmit} className="createForm">
                        <div className="createForm-title-div">
                            <input value={item.title} onChange={handleInput} type="text" name="title" className="createForm-title" placeholder="Title" required />
                        </div>
                        <div className="createForm-date-div">
                            <input value={item.expense} onChange={handleInput} type="number" name="expense" className="createForm-expense" placeholder="Expense" required />
                        </div>
                        <div className="createForm-expense-div">
                            <input value={item.date} onChange={handleInput} type="date" name="date" className="createForm-date" placeholder="Date" required max={currentDate} />
                        </div>
                        <div className="createForm-div-button">
                            <button className="createForm-button">Submit</button>
                        </div>
                    </form>
                </div>
            }

        </div>
    )
}