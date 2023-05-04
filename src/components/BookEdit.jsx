import { useState, useContext } from "react";
import BookContext from "../context/Books";

export default function BookEdit(props) {
    const { editBookById } = useContext(BookContext)
    const [editBook, setEditBook] = useState(props.title)
    // console.log(editBook)

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.toggleEditFnc() // toggle edit menu
        editBookById(props.id, editBook) // change the edit state [called from app.jsx [editBook FNC]]
    }

    function handleInput(event) {
        setEditBook(event.target.value)
    }

    return (
        <div onClick={props.toggleEdit} className="bookEdit">
            <form action="">
                <div className="editForm">
                    <input onChange={handleInput} className="bookEdit-title" type="text" defaultValue={editBook} />
                    <button onClick={handleEditSubmit} className="saveBtn">Save</button>
                </div>
            </form>
        </div>
    )
}