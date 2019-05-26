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
    // const startDateMatch = typeof startDate !== 'number'
    //   || expense.createdAt >= startDate

    // const endDateMatch = typeof endDate !== 'number'
    //   || expense.createdAt <= endDate

    const startDateMatch = startDate 
    // ? DateUtils.isDayBefore(startDate, expense.createdAt ) : true  
      ? isSameOrBefore(startDate, expense.createdAt ) : true  

    const endDateMatch = endDate 
      // ? DateUtils.isDayAfter(endDate, expense.createdAt) : true  
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
