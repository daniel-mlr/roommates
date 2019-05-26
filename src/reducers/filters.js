// filters.js

// utilitaires date
const today = new Date()
const start_of_month = new Date(today.getFullYear(), today.getMonth())
const end_of_month = new Date(today.getFullYear(), today.getMonth() + 1, 0)

// filter reducer
const defaultFilterReducer = {
  text: '',
  sortBy: 'date',
  startDate: start_of_month,
  endDate: end_of_month
}
export default ( state=defaultFilterReducer, action ) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return { ...state, text: action.text}
  case 'SORT_BY_AMOUNT':
    return { ...state, sortBy: 'amount'}
  case 'SORT_BY_DATE':
    return { ...state, sortBy: 'date'}
  case 'SET_START_DATE':
    return { ...state, startDate: action.date}
  case 'SET_END_DATE':
    return { ...state, endDate: action.date}
  default:
    return state
  }
}
