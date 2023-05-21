import { useState } from "react"
import CreateExpense from "./CreateExpense";
import CreateIncome from "./CreateIncome";
import addIcon from '../../image/add.png'

export default function AddExpense(props) {
    const [isSubmit, setIsSubmit] = useState(false);
    const [isIncome, setIsIncome] = useState(false);
    const [isExpense, setIsExpense] = useState(false);

    function handleIsCreate() {
        setIsSubmit(prevIsCreate => !prevIsCreate) // toggle Add Button
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

            {isSubmit
                ?
                <div className="modal">
                    <div className="modalOuter">
                        <button className="modalOuter-btn" onClick={handleIsCreate}>x</button>
                        <div className="modalContent">
                            <CreateIncome                               // Income Component
                                setIsSubmit={setIsSubmit}
                                isIncome={isIncome}
                                handleIsIncome={handleIsIncome}
                            />
                            <CreateExpense                             // Expense Component
                                setIsSubmit={setIsSubmit}
                                isExpense={isExpense}
                                handleIsExpense={handleIsExpense}
                            />
                        </div>
                    </div>
                </div>
                :
                <div className="addItem-button-div">
                    {/* <button className="addItem-button" onClick={handleIsCreate}><img src={addIcon} alt="addIcon" /></button> */}
                    <button className="addItem-button" onClick={handleIsCreate}>Add</button>
                </div>
            }
        </div>
    )
}