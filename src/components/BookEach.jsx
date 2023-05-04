import { useState, useContext } from "react"
import BookEdit from "./BookEdit"
import BookContext from "../context/Books"

export default function BookEach(props) {
    const { removeBookById } = useContext(BookContext)
    const [toggleEdit, setToggleEdit] = useState(false)

    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }

    console.log(toggleEdit)
    return (
        props.title !== '' &&   // only create if user have entered a value
        <div className="bookEach">
            <img src={`https://picsum.photos/seed/${props.id}/200/300`} alt="Random Image" />
            {
                toggleEdit === false ? // display title and buttons
                    <>
                        <h1>{props.title}</h1>
                        <div className="bookEach-button">
                            <button className="deleteBtn" onClick={() => removeBookById(props.id)}>Delete</button  >     {/* remove items */}
                            <button onClick={toggleEditFnc} className="editBtn" > Edit</button>
                        </div>
                    </>
                    : // display edit section
                    <BookEdit toggleEditFnc={toggleEditFnc} {...props} />
            }
        </div>
    )
}