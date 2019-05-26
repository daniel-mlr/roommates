import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})
test('Should setup edit expense action object', () => {
  const action = editExpense('12ab',{note: 'New note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12ab',
    updates: {note: 'New note value'}
  })
})

test('should setup add epense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was ladst month rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String)
    }
  })
})

test('should setup add expeense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note : '',
      amount : 0,
      createdAt: 0
    }
  })
})
