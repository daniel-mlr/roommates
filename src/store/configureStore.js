// configureStore.js
import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  // combinaison des reducers
  const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }))
  
  return store
}
