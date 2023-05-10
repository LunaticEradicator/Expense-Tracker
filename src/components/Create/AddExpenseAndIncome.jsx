import { useState } from "react"
import CreateExpense from "./CreateExpense";
import CreateIncome from "./CreateIncome";

export default function AddExpense() {
    const [isCreate, setIsCreate] = useState(false);
    const [isIncome, setIsIncome] = useState(false);
    const [isExpense, setIsExpense] = useState(false);

    function handleIsCreate() {
        setIsCreate(prevIsCreate => !prevIsCreate)
    }

    function handleIsIncome() {
        setIsIncome(prevIsIncome => !prevIsIncome)
        setIsExpense(false)
    }

    function handleIsExpense() {
        setIsExpense(prevIsExpense => !prevIsExpense)
        setIsIncome(false)
    }

    return (
        <div className="addItem">
            {isCreate
                ?
                <>
                    <CreateIncome                               // Income Component
                        isIncome={isIncome}
                        handleIsIncome={handleIsIncome}
                    />
                    <CreateExpense                             // Expense Component
                        setIsCreate={setIsCreate}
                        isExpense={isExpense}
                        handleIsExpense={handleIsExpense}
                    />
                </>
                :
                <div className="addItem-button-div">
                    <button className="addItem-button" onClick={handleIsCreate}>+</button>
                </div>
            }
        </div>
    )
}