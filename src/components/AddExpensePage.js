import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ExpenseForm  from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)

AddExpensePage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object
} 
export default connect()(AddExpensePage)
