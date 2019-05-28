// ExpensesListFilters.js
// basic presentational component
//
// voir ExpenseList.js pour logique de connection semblable
import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

// helpers function per http://react-day-picker.js.org/examples/selected-range<Paste>
// const getInitialState = () => {
//   return {
//     from: props.filters.startDate,
//     to: props.filters.endDate,
//   }
// }
// // const { from, to } = this.state;
// const { from, to } = getInitialState()
// const modifiers = { start: from, end: to };

const ExpenseListFilters = (props) => (
  // on a maintenant acces à state.filters grace à mapStateToProps ci-bas
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

    <p>from</p>
    <DayPickerInput
      selectedDays={props.filters.startDate }
      value={props.filters.startDate}
      onDayChange={(date) => {
        props.dispatch(setStartDate( date ))
      }}
    />
    <p>to</p>
    <DayPickerInput
      selectedDays={props.filters.endDate }
      value={props.filters.endDate}
      onDayChange={(date) => {
        props.dispatch(setEndDate( date ))
      }}
    />

  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
