import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses.js'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/style.scss'

// instantiation d'un store
const store = configureStore()

// assigne deux expenses au store
store.dispatch(addExpense({ 
  description: 'Water Bill', 
  amount: 500, 
  createdAt: 1000 
}))
store.dispatch(addExpense({ 
  description: 'Gaz bill', 
  amount: 394, 
  createdAt: -1000 
}))

// assigne un filtre
store.dispatch(setTextFilter('water'))

// acquisition de l'état du store
const state = store.getState()
console.log(state)

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

