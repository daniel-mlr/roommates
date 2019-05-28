// ExpenseList.js
import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from  '../selectors/expenses'

// our regular unconnected component
// prensentation component
// this component donesn't need to worry about store subscribe or getState
const ExpenseList = (props) => (
  <div>
    <h2>Expense List</h2>
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
)

// function expected in connect
// as the store changes, this is automatically re-run
// i.e. when we connect a component to a redux store, it is reactive
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}
ExpenseList.propTypes = {
  expenses: PropTypes.object
}
// hoc?
export default connect(mapStateToProps)(ExpenseList)
// avant:
// const ConnectedExpenseList = connect((state) => {
// export default connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)

// export default ExpenseList
// export default ConnectedExpenseList