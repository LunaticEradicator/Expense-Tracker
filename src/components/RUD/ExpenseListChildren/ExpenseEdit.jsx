import { useState } from "react";
import useCustomBookContext from "../../../hooks/use-custom-book-context";
import useCurrentDate from "../../../hooks/useCurrentDate";

export default function BookEdit(props) {
    const { editBookById } = useCustomBookContext();
    const currentDate = useCurrentDate();  // custom hook to get currentDate
    const [editBook, setEditBook] = useState({
        editTitle: props.title,
        editDate: props.date,
        editExpense: props.expense,
        editIncome: props.income
    })
    console.log(editBook)

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.toggleEditFnc() // toggle edit menu
        editBookById(props.id, editBook.editTitle, editBook.editDate, editBook.editExpense, editBook.editIncome) // change the edit state [called from app.jsx [editBook FNC]]
    }

    function handleInput(event) {
        setEditBook(prevEditBook => {
            return { ...prevEditBook, [event.target.name]: event.target.value }
        }
        )
    }

    return (
        <div onClick={props.toggleEdit} className="bookEdit">
            <form action="">
                <div className="editForm">
                    <input onChange={handleInput} className="bookEdit-title" name="editTitle" type="text" defaultValue={editBook.editTitle} />
                    <input onChange={handleInput} className="bookEdit-date" name="editDate" type="date" defaultValue={editBook.editDate} max={currentDate} />
                    {editBook.editExpense === 0 // by default we set expense and income to 0 if they are not selected
                        ?
                        // display income and disable expense if editExpense === [0] 
                        <input onChange={handleInput} className="bookEdit-amount" name="editIncome" type="number" defaultValue={editBook.editIncome} />
                        :
                        // display expense and disable income if editExpense !== [0] 
                        <input onChange={handleInput} className="bookEdit-amount" name="editExpense" type="number" defaultValue={editBook.editExpense} />
                    }
                    <button onClick={handleEditSubmit} className="saveBtn">Save</button>
                </div>
            </form>
        </div>
    )
}