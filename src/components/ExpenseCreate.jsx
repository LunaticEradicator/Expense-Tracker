import { useState } from "react"
import useCustomBookContext from "../hooks/use-custom-book-context"

export default function ExpenseCreate(props) {
    const [item, setItem] = useState({
        title: '',
        amount: '',
        date: ''
    }) // to have an controlled input

    const { createBook } = useCustomBookContext()

    // console.log(item.amount)

    const handleSubmit = (event) => { // to submit new book
        event.preventDefault()
        createBook(item.title, item.amount, item.date) // createBook Fnc ------------------
        setItem(prevItem => {
            return { title: '', amount: '', date: '' }
        }) // erase eachBookName after submit
        props.setIsCreate(false)
    }

    const handleInput = (event) => { // to get userInput of the books title
        setItem(prevItem => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }
    return (
        <div className="ExpenseCreate">
            <div className="createForm-div">
                <form onSubmit={handleSubmit} className="createForm">
                    <div className="createForm-title-div">
                        <input value={item.title} onChange={handleInput} type="text" name="title" className="createForm-title" placeholder="Title" required />
                    </div>
                    <div className="createForm-date-div">
                        <input value={item.amount} onChange={handleInput} type="number" name="amount" className="createForm-expense" placeholder="Amount" required />
                    </div>
                    <div className="createForm-expense-div">
                        <input value={item.date} onChange={handleInput} type="date" name="date" className="createForm-date" placeholder="Date" required />
                    </div>
                    <div className="createForm-div-button">
                        <button className="createForm-button">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}