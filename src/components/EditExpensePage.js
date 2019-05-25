import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import PropTypes from 'prop-types'
import { editExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  console.log('props de editExpensePage:', props)
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log('updated:', expense)
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
      />
    </div>
  )
}
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }

}
EditExpensePage.propTypes = {
  expense: PropTypes.object
}
export default connect(mapStateToProps)(EditExpensePage)
