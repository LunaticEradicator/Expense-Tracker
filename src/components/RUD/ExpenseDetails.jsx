import useCustomExpenseContext from "../../hooks/use-custom-expense-context";

export default function ExpenseDetails() {
    const { expense } = useCustomExpenseContext();

    const totalIncome = expense.reduce((acc, item) => {
        return acc + parseInt(item.income)
    }, 0)

    const totalExpense = expense.reduce((acc, item) => {
        return acc + parseInt(item.expense)
    }, 0)

    const balanceAmount = totalIncome - totalExpense

    const ratio = balanceAmount / totalIncome;
    console.log(ratio)

    function balanceProgressBar() {
        if (ratio <= 0) {
            return 'linear-gradient(110deg, rgb(21, 224, 157)  0%,   rgb(255 0 0 / 81%) 0%)'
        }
        if (ratio > 0.01 && ratio < 0.2) {
            return 'linear-gradient(110deg, rgb(21, 224, 157)  10%,  rgb(255 0 0 / 81%) 10%)'
        }
        if (ratio >= 0.02 && ratio < 0.3) {
            return 'linear-gradient(110deg, rgb(21, 224, 157)  20%,   rgb(255 0 0 / 81%) 20%)'
        }
        if (ratio >= 0.03 && ratio < 0.4) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 30%,   rgb(255 0 0 / 81%) 30%)'
        }
        if (ratio >= 0.04 && ratio < 0.5) {
            return 'linear-gradient(110deg, rgb(21, 224, 157)  40%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio === 0.5) {
            return 'linear-gradient(110deg, rgb(21, 224, 157)  50%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio > 0.05 && ratio < 0.6) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 55%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio > 0.06 && ratio < 0.7) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 63%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio >= 0.07 && ratio < 0.8) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 70%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio >= 0.08 && ratio < 0.9) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 80%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio >= 0.09 && ratio < 1) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 90%,   rgb(255 0 0 / 81%) 40%)'
        }
        if (ratio === 1 || ratio > 1) {
            return 'linear-gradient(110deg, rgb(21, 224, 157) 100%,   rgb(255 0 0 / 81%) 40%)'
        }
    }

    return (
        <div style={{ background: balanceProgressBar() }}
            className="expenseDetails-div">
            <div className="expenseDetails-total">
                <h1>Balance: {balanceAmount} </h1>
            </div>
            <div className="expenseDetails-both">
                <h2>Income: +{totalIncome}</h2>
                <h2>Expense : -{totalExpense}</h2>
            </div>
        </div>
    )
}