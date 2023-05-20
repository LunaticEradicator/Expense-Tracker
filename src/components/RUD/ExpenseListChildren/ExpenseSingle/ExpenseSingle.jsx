import { useState } from "react"
import ExpenseEdit from "../ExpenseEdit"
import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import defaultImage from '../../../../image/default.png'

export default function BookEach(props) {
    const { removeBookById } = useCustomBookContext()
    const [toggleEdit, setToggleEdit] = useState(false)
    const changeDateFormatIND = props.date.split('-').reverse().join('-');
    const capitalizeCategories = props.categories.charAt(0).toUpperCase() + props.categories.slice(1);

    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }

    return (
        // if duplicateDate[props.duplicate] does not contains the new books date then it is not a duplicate
        props.title !== '' && !props.repeatingDate.includes(props.date) &&  // only create if user have entered a value && if there are no duplicates available
        <div className="expenseEachNew">
            {
                // ---------------------------------------
                toggleEdit === false ?          // display title and buttons
                    <div>
                        <div className="bookEach-header">
                            <h2>{changeDateFormatIND}</h2> {/* reverse to dd-mm-yy format */}
                            {props.expense !== '' && props.income === 0 && <h3 style={{ color: 'red' }}>-{props.expense}</h3>}
                            {props.income !== '' && props.expense === 0 && <h3 style={{ color: 'green' }}>+{props.income}</h3>}
                        </div>
                        <div className="bookEach-content">
                            <div className="bookEach-content-details">
                                <img src={defaultImage} alt="Random Image" className="icon" />
                                <h3>{capitalizeCategories}</h3> {/* reverse to dd-mm-yy format */}
                                <h3>{props.title}</h3>
                            </div>
                            <div>
                                {props.expense !== '' && props.income === 0 && <h3 style={{ color: 'red' }}>-{props.expense}</h3>}
                                {props.income !== '' && props.expense === 0 && <h3 style={{ color: 'green' }}>+{props.income}</h3>}
                            </div>
                            <div className="bookEach-button">
                                <button className="deleteBtn" onClick={() => removeBookById(props.id)}>Delete</button  >     {/* remove items */}
                                <button onClick={toggleEditFnc} className="editBtn" > Edit</button>
                            </div>
                        </div>

                    </div>
                    :                           // display edit section
                    <ExpenseEdit toggleEditFnc={toggleEditFnc} {...props} />
                // ---------------------------------------
            }
        </div >
    )
}
