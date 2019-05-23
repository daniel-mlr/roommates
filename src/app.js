import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses.js'
// import { setTextFilter } from './actions/filters'
// import { sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/style.scss'

// instantiation d'un store
const store = configureStore()

// assigne deux expenses au store
store.dispatch(addExpense({ 
  description: 'Water Bill', 
  amount: 4500, 
  createdAt: 1000 
}))
store.dispatch(addExpense({ 
  description: 'Gaz bill', 
  amount: 1000, 
  createdAt: 5000 
}))
store.dispatch(addExpense({ 
  description: 'Rent', 
  amount: 109500, 
  createdAt: -1000 
}))

// store.dispatch(sortByAmount())
// acquisition de l'état du store
const state = store.getState()
// console.log('================ \nState\n', state)

// affiche les résultats en fonction des expenses et des filtre assignés
const visibleExpenses = getVisibleExpenses(
  state.expenses, state.filters
)
console.log(visibleExpenses)

// ReactDOM.render(<AppRouter/>, document.getElementById('app'))

const jsx = ( 
  <Provider store={store}>
    <AppRouter /> 
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))

