import { useContext } from "react";
import ExpenseContext from "../context/Expense";

export default function useCustomExpenseContext() {
    return useContext(ExpenseContext)
}


