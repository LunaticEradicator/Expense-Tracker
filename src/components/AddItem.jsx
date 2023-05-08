import { useState } from "react"
import ExpenseCreate from "./ExpenseCreate";

export default function BookCreate() {
    // const [isIncome, setIsIncome] = useState(false);
    // const [isExpense, setIsExpense] = useState(false);

    // function handleIsIncome() {
    //     setIsIncome(prevIsIncome => !prevIsIncome)
    // }
    // function handleIsExpense() {
    //     setIsExpense(prevIsExpense => !prevIsExpense)
    // }

    const [isCreate, setIsCreate] = useState(false);

    function handleIsCreate() {
        setIsCreate(prevIsCreate => !prevIsCreate)
    }



    return (
        <div className="bookCreate">
            {isCreate ?
                <ExpenseCreate
                    setIsCreate={setIsCreate}
                />
                :
                <div className="addExpense-div">
                    <button className="addExpense-button" onClick={handleIsCreate}>Add</button>
                </div>
            }
        </div>
    )
}