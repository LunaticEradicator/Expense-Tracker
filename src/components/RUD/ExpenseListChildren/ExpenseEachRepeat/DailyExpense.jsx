import useCustomBookContext from "../../../../hooks/use-custom-book-context"

export default function DailyExpense(props) {
    // console.log(`---------------------------------------------`)
    // console.log(props.repeatingDate)
    // console.log(props.date)
    // console.log(props.repeatingDate.includes(props.date))


    const renderExpenseEachRepeatingHeader = props.repeatingDate.map((itemDate) => {
        console.log(`---------------`)
        console.log(itemDate)
        console.log(props.date)
        console.log(itemDate === (props.date))
        console.log(itemDate.includes(props.date))
        return (
            <>
                {itemDate === (props.date) && < h2 > {props.expense} </h2 >}
                {/* <h2>{console.log(itemDate === (props.date))}</h2> */}
            </>


        )
    })

    return (
        <>
            <h2>{props.expense}</h2>
        </>
    )
}