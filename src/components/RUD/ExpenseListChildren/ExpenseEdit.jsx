import { useState } from "react";
import useCustomBookContext from "../../../hooks/use-custom-book-context";
import useCurrentDate from "../../../hooks/useCurrentDate";

export default function BookEdit(props) {
    const { editBookById } = useCustomBookContext();
    const currentDate = useCurrentDate();  // custom hook to get currentDate
    const [editBook, setEditBook] = useState({
        editTitle: props.title,
        editDate: props.date,
        editExpense: props.expense,
        editIncome: props.income,
        editCategories: props.categories
    })
    console.log(`--Edit Book--`)
    console.log(editBook)

    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.toggleEditFnc() // toggle edit menu
        editBookById(props.id, editBook.editTitle, editBook.editDate, editBook.editExpense, editBook.editIncome, editBook.editCategories) // change the edit state [called from app.jsx [editBook FNC]]
    }

    function handleInput(event) {
        setEditBook(prevEditBook => {
            return { ...prevEditBook, [event.target.name]: event.target.value }
        }
        )
    }

    return (
        <div onClick={props.toggleEdit} className="expenseEdit">
            <form action="">
                <div className="editForm">
                    <input onChange={handleInput} className="editForm-title" name="editTitle" type="text" defaultValue={editBook.editTitle} />
                    <input onChange={handleInput} className="editForm-date" name="editDate" type="date" defaultValue={editBook.editDate} max={currentDate} />
                    {editBook.editExpense === 0 // by default we set expense and income to 0 if they are not selected
                        ?
                        // Display INCOME and disable expense if editExpense === [0] 
                        <>
                            <input onChange={handleInput} className="editForm-amount" name="editIncome" type="number" defaultValue={editBook.editIncome} />
                            <select onChange={handleInput} name="editCategories" defaultValue={editBook.editCategories} required>
                                <option disabled value={''} >Categories</option>
                                <option value="salary">Salary</option>
                                <option value="grants">Grants</option>
                                <option value="awards">Awards</option>
                                <option value="coupon">Coupon</option>
                                <option value="lottery">Lottery</option>
                                <option value="refund">Refund</option>
                                <option value="rental">Rental</option>
                                <option value="stocks">Stocks</option>
                                <option value="investment">Investment</option>
                                <option value="others">Others</option>
                            </select>
                        </>
                        :
                        // Display EXPENSE and disable income if editExpense !== [0] 
                        <>
                            <input onChange={handleInput} className="editForm-amount" name="editExpense" type="number" defaultValue={editBook.editExpense} />
                            <select onChange={handleInput} name="editCategories" required defaultValue={editBook.editCategories}  >
                                <option value={''} disabled >Categories</option>
                                <option value="pet">Pet</option>
                                <option value="bills">Bills</option>
                                <option value="cars">Cars</option>
                                <option value="food">Food</option>
                                <option value="home">Home</option>
                                <option value="movie">Movie</option>
                                <option value="stocks">Stocks</option>
                                <option value="health">Health</option>
                                <option value="clothing">Clothing</option>
                                <option value="computer">Computer</option>
                                <option value="insurance">Insurance</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="transportation">Transportation</option>
                                <option value="others">Others</option>
                            </select>
                        </>
                    }
                    <button onClick={handleEditSubmit} className="editForm-saveBtn">Save</button>
                </div>
            </form>
        </div>
    )
}