import { useState } from "react"
import useCustomExpenseContext from "../../hooks/use-custom-expense-context"
import useCurrentDate from "../../hooks/useCurrentDate"

export default function ExpenseCreate(props) {
    const { createExpense } = useCustomExpenseContext()
    const currentDate = useCurrentDate(); // custom hook to get currentDate

    const [item, setItem] = useState({
        title: '',
        date: '',
        expense: '',
        categories: ''
    }) // to have an controlled input


    const handleSubmit = (event) => { // to submit new expense
        event.preventDefault()
        createExpense(item.title, item.date, item.expense, 0, item.categories) // 0 === income [add sum without showing Nan]
        setItem({ title: '', date: '', expense: '', categories: '' })     // erase eachExpense after submit
        props.setIsSubmit(false)
    }

    const handleInput = (event) => { // to get userInput 
        setItem(prevItem => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="addItem-expenseCreate-div">
            <button onClick={() => props.handleIsExpense()} className="addItem-expenseCreate-button ">Create Expense</button>
            {props.isExpense &&

                <div className="createForm-div  ">
                    <form onSubmit={handleSubmit} className="createForm" required>
                        <div className="createForm-title-div">
                            <input value={item.title} onChange={handleInput} type="text" name="title" className="createForm-title" placeholder="Title" autoComplete="false" />
                        </div>
                        <div className="createForm-expense-div">
                            <input value={item.expense} onChange={handleInput} type="number" name="expense" className="createForm-expense" placeholder="Amount *" required autoComplete="false" />
                        </div>
                        <div className="createForm-date-div">
                            <input value={item.date} onChange={handleInput} type="date" name="date" className="createForm-date" placeholder="Date" required max={currentDate} />
                        </div>
                        <div className="createForm-expenseCategories-div" >
                            <select onChange={handleInput} name="categories" required >
                                <option value={''} disabled selected >Categories</option>
                                <option value="pet">Pet</option>
                                <option value="cars">Cars</option>
                                <option value="bills">Bills</option>
                                <option value="food">Food</option>
                                <option value="home">Home</option>
                                <option value="movie">Movie</option>
                                <option value="stocks">Stocks</option>
                                <option value="health">Health</option>
                                <option value="clothing">Clothing</option>
                                <option value="computer">Computer</option>
                                <option value="insurance">Insurance</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="transportation">Transportation</option>
                                <option value="others">Others</option>
                            </select>
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