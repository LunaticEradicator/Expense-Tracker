import { useState } from "react"
import ExpenseCreate from "./ExpenseCreate";
import IncomeCreate from "./IncomeCreate";

export default function BookCreate() {
    const [isIncome, setIsIncome] = useState(false);
    const [isExpense, setIsExpense] = useState(false);

    function handleIsIncome() {
        setIsIncome(prevIsIncome => !prevIsIncome)
        setIsExpense(false)
    }

    function handleIsExpense() {
        setIsExpense(prevIsExpense => !prevIsExpense)
        setIsIncome(false)
    }

    const [isCreate, setIsCreate] = useState(false);

    function handleIsCreate() {
        setIsCreate(prevIsCreate => !prevIsCreate)
    }


    return (
        <div className="addItem">
            {isCreate ?
                <>
                    <IncomeCreate
                        // setIsCreate={setIsCreate}
                        isIncome={isIncome}
                        handleIsIncome={handleIsIncome}
                    />
                    <ExpenseCreate
                        setIsCreate={setIsCreate}
                        isExpense={isExpense}
                        handleIsExpense={handleIsExpense}
                    />
                </>

                :
                <div className="addItem-button-div">
                    <button className="addItem-button" onClick={handleIsCreate}>Add</button>
                </div>
            }
            {/* {isCreate ?
                <ExpenseCreate
                    setIsCreate={setIsCreate}
                />
                :
                <div className="addExpense-div">
                    <button className="addExpense-button" onClick={handleIsCreate}>Add</button>
                </div>
            } */}
        </div>
    )
}