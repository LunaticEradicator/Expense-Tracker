import ExpenseEachNew from './ExpenseListChildren/ExpenseEachNew/ExpenseEachNew'
import useCustomBookContext from "../../hooks/use-custom-book-context"
import ExpenseEachRepeatingHeader from './ExpenseListChildren/ExpenseEachRepeat/ExpenseEachRepeatingHeader'

export default function BookList() {
    const { books } = useCustomBookContext()

    const allDate = books.map(item => {
        return item.date
    })

    const showRepeatingDate = allDate.filter((item, index) => allDate.indexOf(item) !== index) // ---------------- shows duplicateDate from allDate
    const repeatingDate = showRepeatingDate.filter((item, index) => showRepeatingDate.indexOf(item) === index) // remove duplicate from showRepeatingDate

    // console.log(`--------------------allDate---------------------`)
    // console.log(allDate)
    // console.log(`--------------------duplicateDateValue---------------------`)
    // console.log(findDuplicateDate);
    // console.log(`--------------------RefinedDate---------------------`)
    // console.log(filterDate);


    const renderExpenseEachNew = books.map(book => { // map each books 
        return < ExpenseEachNew
            key={book.id}
            repeatingDate={repeatingDate}
            {...book}
        />
    })

    const renderExpenseEachRepeatingHeader = repeatingDate.map((itemDate, index) => {
        return <ExpenseEachRepeatingHeader
            key={index}
            repeatingDate={itemDate}
            date={allDate}
        />
    })

    return (
        < div className="bookList" >
            {renderExpenseEachRepeatingHeader}
            {renderExpenseEachNew}
        </div >
    )

}
// const lastAddedDate = duplicateDateValue.every(item => {
//     return item
// })

// console.log(`-----------------lastAddedDate--------------------`)
// console.log(lastAddedDate)

    // // ------------------------ Check Duplicate Array {

    // let containDuplicate = allDate.some((element, index) => {
    //     return allDate.indexOf(element) !== index
    // });
    // if (containDuplicate) {
    //     console.log('Duplicate elements exist');
    //     // console.log(containDuplicate);
    // }
    // else {
    //     console.log("Duplicates doesn't exist ");
    // }
    // // ------------------------ toFindDuplicates Array {