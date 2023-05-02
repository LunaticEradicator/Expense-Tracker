import { useState } from "react";

export default function BookEdit(props) {
    // console.log(props.handleEditToggle)
    const [editBook, setEditBook] = useState(props.title)

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.handleEditToggle() // toggle edit menu
        props.handleEditBook(props.id, editBook) // change the edit state [called from app.jsx [editBook FNC]]
    }

    function handleInput(event) {
        setEditBook(event.target.value)
    }

    return (
        <div onClick={props.toggleEdit} className="bookEdit">
            <h2>Edit</h2>
            <form action="">
                <input onChange={handleInput} className="bookEdit-title" type="text" defaultValue={editBook} />
                <button onClick={handleEditSubmit} className="editBtn">Save</button>
            </form>
        </div>
    )
}