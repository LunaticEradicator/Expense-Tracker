import { useEffect, useState } from "react"
import ExpenseEdit from "../ExpenseEdit"
import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import defaultImage from '../../../../image/default.png'

export default function ExpenseEachRepeating(props) {
    const { removeBookById } = useCustomBookContext()
    const [toggleEdit, setToggleEdit] = useState(false)
    const capitalizeFirstLetterCategories = props.categories.charAt(0).toUpperCase() + props.categories.slice(1);


    // console.log(props.repeatingDate)
    // console.log(props.date)


    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }

    return (
        //if duplicateDate[props.duplicate] contains the new books date then it is a duplicate
        props.title !== '' && props.repeatingDate.includes(props.date) && // only create if user have entered a value && if duplicates are available 
        <div className="expenseEachRepeating">
            {
                // ---------------------------------------
                toggleEdit === false ?          // display title and buttons
                    <div className="expenseEachRepeating-content">
                        <div className="expenseEachRepeating-details">
                            <img src={defaultImage} alt="Random Image" className="icon" />
                            <h3>{capitalizeFirstLetterCategories}</h3>
                            <h3>{props.title}</h3>
                        </div>

                        {props.expense !== '' && props.income === 0 && <h3 style={{ color: 'red' }}>-{props.expense}</h3>}
                        {props.income !== '' && props.expense === 0 && <h3 style={{ color: 'green' }}>+{props.income}</h3>}

                        <div className="expenseEachRepeating-button-div">
                            <button className="expenseEachRepeating-deleteBtn" onClick={() => removeBookById(props.id)}>Delete</button  >     {/* remove items */}
                            <button onClick={toggleEditFnc} className="expenseEachRepeating-editBtn" > Edit</button>
                        </div>
                    </div>
                    :                           // display edit section
                    <ExpenseEdit toggleEditFnc={toggleEditFnc} {...props} />
                // ---------------------------------------
            }
        </div >
    )
}
