import { useState } from "react"
import BookEdit from "./BookEdit"

export default function BookEach(props) {
    const [toggleEdit, setToggleEdit] = useState(false)

    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }


    return (
        <div className="bookEach">
            <h1>{props.title}</h1>
            <img src={`https://picsum.photos/seed/${props.id}/200/300`} alt="Random Image" />
            <button className="deleteBtn" onClick={() => props.handleRemoveBook(props.id)}>Delete</button  >     {/* remove items */}
            <button onClick={toggleEditFnc} className="editBtn" > Edit</button>
            {toggleEdit === true &&
                <BookEdit
                    handleEditBook={props.handleEditBook}
                    handleEditToggle={() => toggleEditFnc()}
                    // id={props.id} // no need to call each props just use spread operator 
                    {...props}
                />
            }
        </div>
    )
}