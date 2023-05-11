import { useContext } from "react";
import BookContext from "../context/Expense";

export default function useCustomBookContext() {
    return useContext(BookContext)
}


