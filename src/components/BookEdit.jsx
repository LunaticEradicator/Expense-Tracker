import { useState } from "react";
import useCustomBookContext from "../hooks/use-custom-book-context";

export default function BookEdit(props) {
    const { editBookById } = useCustomBookContext();

    const [editBook, setEditBook] = useState({
        editTitle: props.title,
        editDate: props.date,
        editAmount: props.amount
    })
    console.log(editBook)

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.toggleEditFnc() // toggle edit menu
        editBookById(props.id, editBook.editTitle, editBook.editDate, editBook.editAmount) // change the edit state [called from app.jsx [editBook FNC]]
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
                    <input onChange={handleInput} className="bookEdit-date" name="editDate" type="date" defaultValue={editBook.editDate} />
                    <input onChange={handleInput} className="bookEdit-amount" name="editAmount" type="number" defaultValue={editBook.editAmount} />
                    <button onClick={handleEditSubmit} className="saveBtn">Save</button>
                </div>
            </form>
        </div>
    )
}