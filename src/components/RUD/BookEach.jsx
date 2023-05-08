import { useState } from "react"
import BookEdit from "./BookEdit"
import useCustomBookContext from "../../hooks/use-custom-book-context"
import defaultImage from '../../image/default.png'

export default function BookEach(props) {
    const { removeBookById } = useCustomBookContext()
    const [toggleEdit, setToggleEdit] = useState(false)


    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }
    return (
        props.title !== '' &&   // only create if user have entered a value
        <div className="bookEach">
            <img src={defaultImage} alt="Random Image" className="icon" />
            {
                toggleEdit === false ?          // display title and buttons
                    <>
                        <h1>{props.title}</h1>

                        {props.expense !== '' && props.income === 0 && <h1 style={{ color: 'red' }}>{props.expense}</h1>}
                        {props.income !== '' && props.expense === 0 && <h1 style={{ color: 'green' }}>{props.income}</h1>}

                        <h1>{props.date}</h1>

                        <div className="bookEach-button">
                            <button className="deleteBtn" onClick={() => removeBookById(props.id)}>Delete</button  >     {/* remove items */}
                            <button onClick={toggleEditFnc} className="editBtn" > Edit</button>
                        </div>
                    </>
                    :                           // display edit section
                    <BookEdit toggleEditFnc={toggleEditFnc} {...props} />
            }
        </div>
    )
}