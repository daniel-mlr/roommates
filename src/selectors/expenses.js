// expenses.js
// get visible expenses
import { DateUtils } from 'react-day-picker'

// helper functions
const isSameOrBefore = (day1, day2) => {
  return DateUtils.isDayBefore(day1, day2) || DateUtils.isSameDay(day1, day2)
}
const isSameOrAfter = (day1, day2) => {
  return DateUtils.isDayAfter(day1, day2) || DateUtils.isSameDay(day1, day2)
}

export default (
  expenses, { text, sortBy, startDate, endDate }
) => {
  return expenses.filter((expense) => {
    const startDateMatch = startDate 
      ? isSameOrBefore(startDate, expense.createdAt ) : true  

    const endDateMatch = endDate
      ? isSameOrAfter(endDate, expense.createdAt) : true  

    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if ( sortBy === 'date' ) {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if ( sortBy === 'amount' ) {
      return a.amount < b.amount ? 1 : -1
    }
  })
}
