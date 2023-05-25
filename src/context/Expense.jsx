import { useState, createContext } from "react";
// import { useCallback } from "react";
// import axios from "axios";

const ExpenseContext = createContext();

function Provider({ children }) {
    // const [expense, setExpense] = useState(JSON.parse(localStorage.getItem("allExpenses")) || [])
    const [expense, setExpense] = useState(JSON.parse(localStorage.getItem("allExpenses")) || [])

    expense.sort((a, b) => {                      // sort expense by date
        a = parseInt(a.date.split('-').join(''));
        b = parseInt(b.date.split('-').join(''));
        return b - a
    })

    const fetchApi = () => {
        localStorage.setItem("allExpenses", JSON.stringify(expense))
    }

    const createExpense = (itemTitle, itemDate, itemExpense, itemIncome, itemCategories) => {
        setExpense([...expense,
        {
            id: expense.length + 1,
            title: itemTitle,
            date: itemDate,
            expense: itemExpense,
            income: itemIncome,
            categories: itemCategories
        }
        ])
    }

    const editExpenseById = (id, editTitle, editDate, editExpense, editIncome, editCategories) => {
        setExpense(prevExpenses => prevExpenses.map(item => {
            return item.id === id ?
                { ...item, title: editTitle, date: editDate, expense: editExpense, income: editIncome, categories: editCategories }
                : item
        }))
    }

    const removeExpenseById = (id) => {
        setExpense(prevExpenses => prevExpenses.filter(item => {
            return item.id !== id
        }))
    }

    const valueToBeUsed = {
        fetchApi,
        expense: expense,
        createExpense: createExpense,
        removeExpenseById: removeExpenseById,
        editExpenseById: editExpenseById,
    }

    return (
        <ExpenseContext.Provider value={valueToBeUsed}>
            {children}
        </ExpenseContext.Provider >
    )
}

export default ExpenseContext
export { Provider }


//json server
    // const fetchApi = useCallback(async () => { // to add new expense [post]
    //     const response = await axios.get("http://localhost:8000/expense")
    //     setExpense(response.data)
    // }, [])


    // const createExpense = async (itemTitle, itemDate, itemExpense, itemIncome, itemCategories) => {  // to create expense [post]
    //     const response = await axios.post("http://localhost:8000/expense", {
    //         title: itemTitle,
    //         date: itemDate,
    //         expense: itemExpense,
    //         income: itemIncome,
    //         categories: itemCategories
    //     })
    //     setExpense([response.data, ...expense]) // response.data is the data we are storing [see db.json]
    //     console.log(response)
    //     // console.log(response.date)
    // }


    // const editExpenseById = async (id, editTitle, editDate, editExpense, editIncome, editCategories) => {
    //     const response = await axios.put(`http://localhost:8000/expense/${id}`, {
    //         title: editTitle,
    //         date: editDate,
    //         expense: editExpense,
    //         income: editIncome,
    //         categories: editCategories
    //     })
    //     setExpense(prevExpenses => prevExpenses.map(item => {
    //         // return item.id === id ? { ...item, title: newTitle } : item // instead of getting just one updated value [title]
    //         return item.id === id ? { ...item, ...response.data } : item // return every new value [response.data] // better for large scale productions
    //     }))
    // }


    // const removeExpenseById = async (id) => {
    //     await axios.delete(`http://localhost:8000/expense/${id}`)

    //     setExpense(prevExpenses => prevExpenses.filter(item => {
    //         return item.id !== id
    //     }))
    // }
