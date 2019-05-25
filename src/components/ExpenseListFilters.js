// ExpensesListFilters.js
/* eslint-disable react/prop-types */
// basic presentational component
//
// voir ExpenseList.js pour logique de connection semblable
import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
  // on a maaintenant acces à state.filters grace à mapStateToProps ci-bas
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => (
        props.dispatch(setTextFilter(e.target.value))
        // console.log(e.target.value)
      )}
    />
    <select 
      id="" name="" 
      value={props.filters.sortBy}
      onChange={ (e) => {
        props.dispatch(e.target.value === 'amount' 
          ? sortByAmount() : sortByDate())
      } }
    >
      <option value="date" >Date </option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
