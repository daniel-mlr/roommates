// filter reducer tesst
import filtersReducer from '../../reducers/filters'

const startOfMonth = (date) => (
  new Date(date.getFullYear(), date.getMonth())
)
const endOfMonth = (date) => (
  new Date(date.getFullYear(), date.getMonth() + 1, 0)
)
const today = new Date()

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: startOfMonth(today),
    endDate: endOfMonth(today)
  })
})
test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})
test('should set sortBy to date', () => {
  const currentState = {
    test: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'e'
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe('e')
}) 
test('should set startDate filter', () => {
  const action = {
    type: 'SET_START_DATE',
    date: today
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate.getTime()).toBe(today.getTime())
})

test('should set endDate filter', () => {
  const action = {
    type: 'SET_END_DATE',
    date: today
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate.getTime()).toBe(today.getTime())
})
