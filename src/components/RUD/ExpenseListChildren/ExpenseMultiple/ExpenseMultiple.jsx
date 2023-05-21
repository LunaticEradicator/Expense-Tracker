import { useEffect, useState } from "react"
import ExpenseEdit from "../ExpenseEdit"
import useCustomBookContext from "../../../../hooks/use-custom-book-context"
import defaultImage from '../../../../image/default.png'

import editIcon from '../../../../image/edit.png'
import deleteIcon from '../../../../image/delete.png'

import foodIcon from '../../../../image/food.png'
import clothingIcon from '../../../../image/clothing.png'
import billsIcon from '../../../../image/bills.png'
import transportationIcon from '../../../../image/transportation.png'
import homeIcon from '../../../../image/home.png'
import carsIcon from '../../../../image/cars.png'
import entertainmentIcon from '../../../../image/entertainment.png'
import insuranceIcon from '../../../../image/insurance.png'
import petIcon from '../../../../image/pet.png'
import healthIcon from '../../../../image/health.png'


import salaryIcon from '../../../../image/salary.png'
import awardsIcon from '../../../../image/awards.png'
import grantsIcon from '../../../../image/grants.png'
import couponIcon from '../../../../image/coupon.png'
import lotteryIcon from '../../../../image/lottery.png'
import refundIcon from '../../../../image/refund.png'
import rentalIcon from '../../../../image/rental.png'
import investmentIcon from '../../../../image/investment.png'

import othersIcon from '../../../../image/others.png'
import stocksIcon from '../../../../image/stocks.png'

export default function ExpenseEachRepeating(props) {
    const { removeBookById } = useCustomBookContext()
    const [toggleEdit, setToggleEdit] = useState(false)
    const capitalizeCategories = props.categories.charAt(0).toUpperCase() + props.categories.slice(1);

    function toggleEditFnc() {
        setToggleEdit(prevToggleEdit => !prevToggleEdit)
    }

    return (
        //if duplicateDate[props.duplicate] contains the new books date then it is a duplicate
        props.repeatingDate.includes(props.date) && // only create if user have entered a value && if duplicates are available 
        <div className="expenseEachRepeating">
            {
                // ---------------------------------------
                toggleEdit === false ?          // display title and buttons
                    <div className="expenseEachRepeating-content">
                        <div className="expenseEachRepeating-details">

                            {props.categories === "pet" && <img src={petIcon} alt="petIcon" className="expenseSingle-icon" />}
                            {props.categories === "bills" && <img src={billsIcon} alt="billsIcon" className="expenseSingle-icon" />}
                            {props.categories === "cars" && <img src={carsIcon} alt="carsIcon" className="expenseSingle-icon" />}
                            {props.categories === "food" && <img src={foodIcon} alt="foodIcon" className="expenseSingle-icon" />}
                            {props.categories === "home" && <img src={homeIcon} alt="homeIcon" className="expenseSingle-icon" />}
                            {props.categories === "health" && <img src={healthIcon} alt="healthIcon" className="expenseSingle-icon" />}
                            {props.categories === "clothing" && <img src={clothingIcon} alt="clothingIcon" className="expenseSingle-icon" />}
                            {props.categories === "insurance" && <img src={insuranceIcon} alt="insuranceIcon" className="expenseSingle-icon" />}
                            {props.categories === "transportation" && <img src={transportationIcon} alt="transportationIcon" className="expenseSingle-icon" />}
                            {props.categories === "entertainment" && <img src={entertainmentIcon} alt="entertainmentIcon" className="expenseSingle-icon" />}

                            {props.categories === "salary" && <img src={salaryIcon} alt="salaryIcon" className="expenseSingle-icon" />}
                            {props.categories === "awards" && <img src={awardsIcon} alt="awardsIcon" className="expenseSingle-icon" />}
                            {props.categories === "grants" && <img src={grantsIcon} alt="grantsIcon" className="expenseSingle-icon" />}
                            {props.categories === "coupon" && <img src={couponIcon} alt="couponIcon" className="expenseSingle-icon" />}
                            {props.categories === "lottery" && <img src={lotteryIcon} alt="lotteryIcon" className="expenseSingle-icon" />}
                            {props.categories === "refund" && <img src={refundIcon} alt="refundIcon" className="expenseSingle-icon" />}
                            {props.categories === "rental" && <img src={rentalIcon} alt="rentalIcon" className="expenseSingle-icon" />}
                            {props.categories === "investment" && <img src={investmentIcon} alt="investmentIcon" className="expenseSingle-icon" />}

                            {props.categories === "others" && <img src={othersIcon} alt="othersIcon" className="expenseSingle-icon" />}
                            {props.categories === "stocks" && <img src={stocksIcon} alt="stocksIcon" className="expenseSingle-icon" />}

                            {props.title === '' ? <h3>{capitalizeCategories}</h3> : <h3>{props.title}</h3>}

                        </div>

                        {props.expense !== '' && props.income === 0 && <h3 style={{ color: 'red' }}>-{props.expense}</h3>}
                        {props.income !== '' && props.expense === 0 && <h3 style={{ color: 'green' }}>+{props.income}</h3>}

                        <div className="expenseEachRepeating-button-div">
                            <button onClick={toggleEditFnc} className="expenseEachRepeating-editBtn" > <img src={editIcon} alt="editIcon" /></button>
                            <button className="expenseEachRepeating-deleteBtn" onClick={() => removeBookById(props.id)}><img src={deleteIcon} alt="deleteIcon" /></button>     {/* remove items */}
                        </div>
                    </div>
                    :                           // display edit section
                    <ExpenseEdit toggleEditFnc={toggleEditFnc} {...props} />
                // ---------------------------------------
            }
        </div >
    )
}
