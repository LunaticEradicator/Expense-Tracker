import useCustomBookContext from "../hooks/use-custom-book-context"

export default function ExpenseDetails() {
    const { books } = useCustomBookContext()

    const totalExpense = books.reduce((acc, book) => {
        return acc + parseInt(book.amount)
    }, 0)

    return (
        <div className="expenseDetails-div">
            <h1 className="expenseDetails-heading">ExpenseDetails</h1>

            <div className="expenseDetails-total">
                <h2>Balance </h2>
            </div>
            <div className="expenseDetails-both">
                <h3>Income: Income</h3>
                <h3>Expense : -{totalExpense}</h3>
            </div>
        </div>
    )
}