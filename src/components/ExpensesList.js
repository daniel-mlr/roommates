// ExpenseList.js
/* eslint-disable react/prop-types */

import { connect } from 'react-redux'
import React from 'react'

// our regular unconnected component
// this component donesn't need to worry about store subscribe or getState
const ExpenseList = (props) => (
  <div>
    <h2>Expense List</h2>
    <p>{props.filters.text}</p>
    <p>{props.expenses.length}</p>
  </div>
)

// function expected in connect
// as the store changes, this is automatically re-run
// i.e. when we connect a component to a redux store, it is reactive
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

// hoc?
export default connect(mapStateToProps)(ExpenseList)
// const ConnectedExpenseList = connect((state) => {
// export default connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)

// export default ExpenseList
// export default ConnectedExpenseList
