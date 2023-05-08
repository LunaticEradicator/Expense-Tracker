import useCustomBookContext from "../../hooks/use-custom-book-context";


export default function ExpenseDetails() {
    const { books } = useCustomBookContext()

    const totalIncome = books.reduce((acc, book) => {
        console.log(book)
        return acc + parseInt(book.income)
    }, 0)

    const totalExpense = books.reduce((acc, book) => {
        console.log(book)
        return acc + parseInt(book.expense)
    }, 0)

    const totalCost = totalIncome - totalExpense



    return (
        <div className="expenseDetails-div">
            <h1 className="expenseDetails-heading">ExpenseDetails</h1>

            <div className="expenseDetails-total">
                <h2>Balance: {totalCost} </h2>
            </div>
            <div className="expenseDetails-both">
                <h3>Income: +{totalIncome}</h3>
                <h3>Expense : -{totalExpense}</h3>
            </div>
        </div>
    )
}