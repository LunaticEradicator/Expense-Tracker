export default function useCurrentDate() {
    let currentDate;

    const newDate = new Date()
    const currentDay = newDate.getDate()
    const currentMonth = newDate.getMonth() + 1
    const currentYear = newDate.getFullYear()

    if (currentDay < 10) {
        currentDate = `${currentYear}0${currentMonth}-0${currentDay}`
    }
    if (currentMonth < 10) {
        currentDate = `${currentYear}-0${currentMonth}-${currentDay}`
    }
    else {
        currentDate = `${currentYear}-${currentMonth}-${currentDay}`
    }
    return currentDate
}



