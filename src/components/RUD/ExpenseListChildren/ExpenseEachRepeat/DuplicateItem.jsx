import { useState } from "react"
import ExpenseEdit from "../ExpenseEdit"
import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import defaultImage from '../../../../image/default.png'

export default function DuplicateItem(props) {
    const { removeBookById } = useCustomBookContext()
    const [toggleEdit, setToggleEdit] = useState(false)

    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }
    // console.log(props.date)
    // console.log(props.duplicate)
    return (
        //if duplicateDate[props.duplicate] contains the new books date then it is a duplicate
        props.title !== '' && props.repeatingDate.includes(props.date) && // only create if user have entered a value && if duplicates are available 
        <div className="duplicateItem">
            {
                // ---------------------------------------
                toggleEdit === false ?          // display title and buttons
                    <div>
                        {/* {props.date !== props.duplicate && <h1>{props.date}</h1>} */}
                        <div className="duplicateItem-header">
                            {props.expense !== '' && props.income === 0 && <h1 style={{ color: 'red' }}>-{props.expense}</h1>}
                            {props.income !== '' && props.expense === 0 && <h1 style={{ color: 'green' }}>+{props.income}</h1>}
                        </div>
                        <div className="duplicateItem-content">
                            <img src={defaultImage} alt="Random Image" className="icon" />
                            <h1>{props.title}</h1>
                        </div>
                        <div className="duplicateItem-button">
                            <button className="deleteBtn" onClick={() => removeBookById(props.id)}>Delete</button  >     {/* remove items */}
                            <button onClick={toggleEditFnc} className="editBtn" > Edit</button>
                        </div>
                    </div>
                    :                           // display edit section
                    <ExpenseEdit toggleEditFnc={toggleEditFnc} {...props} />
                // ---------------------------------------
            }
        </div>
    )
}
