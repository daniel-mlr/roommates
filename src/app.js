import React from 'react'
import ReactDOM from 'react-dom'
// import { Render } from 'react-dom'
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
  createdAt: new Date(2019, 2, 5)
}))
store.dispatch(addExpense({
  description: 'Gaz bill',
  amount: 700,
  createdAt: new Date(1000)
}))
store.dispatch(addExpense({ 
  description: 'Rent', 
  amount: 109500, 
  createdAt: new Date(-1000)
}))

// store.dispatch(sortByAmount())
// acquisition de l'état du store
const state = store.getState()
// console.log('================ \nState\n', state)

// affiche les résultats en fonction des expenses et des filtre assignés
// console.log (
getVisibleExpenses(state.expenses, state.filters)
//)

ReactDOM.render(
  // Render(
  <Provider store={store}><AppRouter /></Provider>, // jsx à restituer 
  document.getElementById('app')  // où la restitution se fait-elle
)
