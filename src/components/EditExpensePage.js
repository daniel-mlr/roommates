import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import PropTypes from 'prop-types'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
      />
      <button 
        onClick={ () => {
          props.dispatch(removeExpense( { id: props.expense.id } ))
          props.history.push('/')
        }}
      >Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }

}
EditExpensePage.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object
}
export default connect(mapStateToProps)(EditExpensePage)
