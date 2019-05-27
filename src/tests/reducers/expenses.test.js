// expenses.test.js
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type : 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove expense if id not found', () => {
  const action = {
    type : 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: '189',
    description: 'Truc',
    note: 'une note',
    amount: 20500,
    createdAt: new Date(2000, 2, 4)
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      amount: 5000,
      note: 'montant augmenté'
    }

  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    expenses[0], expenses[1], 
    {...expenses[2], ...action.updates }
  ])
})

test('should not edit an expense when id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-2',
    updates: {
      amount: 5000,
      note: 'montant augmenté'
    }

  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
