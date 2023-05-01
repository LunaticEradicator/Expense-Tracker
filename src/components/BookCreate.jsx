import { nanoid } from "nanoid"
import { useState } from "react"

export default function BookCreate(props) {
    const [eachBookName, setEachBookName] = useState('') // to have an controlled input

    const storeBook = () => {
        // props.setBooks(eachBookName) // add each book to bookList
        props.newBooks([...props.oldBooks, { id: nanoid(), title: eachBookName }]) // used an array since state will be overwritten when adding element 
    }

    const handleSubmit = (event) => { // to submit 
        event.preventDefault()
        storeBook()
        setEachBookName('') // erase eachBookName after submit
    }

    const handleInput = (event) => { // to get userInput 
        setEachBookName(event.target.value)
    }

    return (
        <div className="bookCreate">
            <h2>Create Book</h2>
            <form onSubmit={handleSubmit} action="">
                <input value={eachBookName} onChange={handleInput} type="text" name="bookName" />
                <button>Create Book</button>
            </form>
        </div>
    )
}