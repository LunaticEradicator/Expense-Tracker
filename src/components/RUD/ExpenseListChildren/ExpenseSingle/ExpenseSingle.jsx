import { useState } from "react"
import ExpenseEdit from "../ExpenseEdit"
import useCustomExpenseContext from "../../../../hooks/use-custom-expense-context"

import editIcon from '../../../../image/edit.png'
import deleteIcon from '../../../../image/delete.png'


import foodIcon from '../../../../image/food.png'
import clothingIcon from '../../../../image/clothing.png'
import billsIcon from '../../../../image/bills.png'
import transportationIcon from '../../../../image/transportation.png'
import homeIcon from '../../../../image/home.png'
import movieIcon from '../../../../image/movie.png'
import carsIcon from '../../../../image/cars.png'
import entertainmentIcon from '../../../../image/entertainment.png'
import computerIcon from '../../../../image/computer.png'
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



export default function ExpenseSingle(props) {
    const { removeExpenseById } = useCustomExpenseContext()
    const [toggleEditSingle, setToggleEditSingle] = useState(false)
    const changeDateFormatIND = props.date.split('-').reverse().join('-');
    const capitalizeCategories = props.categories.charAt(0).toUpperCase() + props.categories.slice(1);

    function toggleEditFnc() {
        setToggleEditSingle(prevToggleEdit => !prevToggleEdit)
    }

    return (
        // if the date already exist [duplicate], add it in Single Expense Section   
        props.minimizeSingle && !props.repeatingDate.includes(props.date) &&  // only create if user have entered a value && if there are no duplicates available
        <div className="expenseSingle">
            {
                // ---------------------------------------
                toggleEditSingle === false ?                                                  // edit toggle off => display singleExpense details
                    <div>
                        <div className="expenseSingle-header">
                            <h2 className="expenseSingle-header-date" >{changeDateFormatIND}</h2> {/* reverse to dd-mm-yy format */}

                            {/* Display Corresponding Header */}
                            {props.expense !== '' && props.income === 0 && <h2 style={{ color: 'red', fontWeight: 'bolder' }}> &darr;{props.expense}</h2>}
                            {props.income !== '' && props.expense === 0 && <h2 style={{ color: 'green', fontWeight: 'bolder' }}> &uarr;{props.income}</h2>}

                        </div>
                        <div className="expenseSingle-content">
                            {/* Display Corresponding Icon for the categories */}
                            <div className="expenseSingle-content-details">
                                {props.categories === "pet" && <img src={petIcon} alt="petIcon" className="expenseSingle-icon" />}
                                {props.categories === "bills" && <img src={billsIcon} alt="billsIcon" className="expenseSingle-icon" />}
                                {props.categories === "cars" && <img src={carsIcon} alt="carsIcon" className="expenseSingle-icon" />}
                                {props.categories === "food" && <img src={foodIcon} alt="foodIcon" className="expenseSingle-icon" />}
                                {props.categories === "home" && <img src={homeIcon} alt="homeIcon" className="expenseSingle-icon" />}
                                {props.categories === "movie" && <img src={movieIcon} alt="movieIcon" className="expenseSingle-icon" />}
                                {props.categories === "health" && <img src={healthIcon} alt="healthIcon" className="expenseSingle-icon" />}
                                {props.categories === "clothing" && <img src={clothingIcon} alt="clothingIcon" className="expenseSingle-icon" />}
                                {props.categories === "computer" && <img src={computerIcon} alt="computerIcon" className="expenseSingle-icon" />}
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

                            {/* Display Corresponding income or Expense According to the user selection*/}
                            <div>
                                {props.expense !== '' && props.income === 0 && <h3 style={{ color: 'red', fontWeight: 'bolder' }}>-{props.expense}</h3>}
                                {props.income !== '' && props.expense === 0 && <h3 style={{ color: 'green', fontWeight: 'bolder' }}>+{props.income}</h3>}
                            </div>

                            {/* Edit and Delete Btn*/}
                            <div className="expenseSingle-button-div">
                                <button onClick={toggleEditFnc} className="expenseSingle-editBtn" > <img className="expenseSingle-editBtn-icon" src={editIcon} alt=" editIcon" /></button>
                                <button onClick={() => removeExpenseById(props.id)} className="expenseSingle-deleteBtn"><img className="expenseSingle-deleteBtn-icon" src={deleteIcon} alt="deleteIcon" /></button  >     {/* remove items */}
                            </div>
                        </div>

                    </div>
                    :                                                                    // edit toggle on
                    <ExpenseEdit toggleEditFnc={toggleEditFnc} {...props} />
                // ---------------------------------------
            }
        </div >
    )
}
