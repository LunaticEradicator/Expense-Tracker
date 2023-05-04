import { useContext } from "react";
import BookContext from "../context/Books";

export default function useCustomBookContext() {
    return useContext(BookContext)
}


