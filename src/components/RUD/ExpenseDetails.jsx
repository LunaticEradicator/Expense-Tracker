import useCustomBookContext from "../../hooks/use-custom-book-context";

export default function ExpenseDetails() {
    const { books } = useCustomBookContext();

    const totalIncome = books.reduce((acc, book) => {
        return acc + parseInt(book.income)
    }, 0)

    const totalExpense = books.reduce((acc, book) => {
        return acc + parseInt(book.expense)
    }, 0)

    const totalCost = totalIncome - totalExpense



    return (
        <div className="expenseDetails-div">
            <div className="expenseDetails-total">
                <h1>Balance: {totalCost} </h1>
            </div>
            <div className="expenseDetails-both">
                <h2>Income: +{totalIncome}</h2>
                <h2>Expense : -{totalExpense}</h2>
            </div>
        </div>
    )
}