// filters.test.js
import { 
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters'

test('should generate set start date action object', () => {
  const action = setStartDate(new Date(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: new Date(0)
  })

})
test('should generate set end date action object', () => {
  const action = setEndDate(new Date(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: new Date(0)
  })
})
test('should generate setTextFilter object', () => {
  const action = setTextFilter('mon texte')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'mon texte'
  })
})
test('should generate setTextFilter default object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
test('should generate sortByAmount object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})
test('should generate sortByDate object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})
