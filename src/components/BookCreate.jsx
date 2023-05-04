import { useState } from "react"
import useCustomBookContext from "../hooks/use-custom-book-context"


export default function BookCreate() {
    const [newBookName, setNewBookName] = useState('') // to have an controlled input
    const { createBook } = useCustomBookContext()

    console.log(newBookName)

    const handleSubmit = (event) => { // to submit new book
        event.preventDefault()
        createBook(newBookName) // createBook Fnc ------------------
        setNewBookName('') // erase eachBookName after submit
    }

    const handleInput = (event) => { // to get userInput of the books title
        setNewBookName(event.target.value)
    }

    return (
        <div className="bookCreate">
            <div className="createForm">
                <form onSubmit={handleSubmit} action="">
                    <input value={newBookName} onChange={handleInput} type="text" name="bookName" className="createForm-bookName" required />
                    <button className="createForm-button">Create Book</button>
                </form>
            </div>

        </div>
    )
}