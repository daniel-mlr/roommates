// ExpenseForm.js
import React from 'react'
import PropTypes from 'prop-types'
import DayPickerInput from 'react-day-picker/DayPickerInput'

// utilisation de "local component state" pour
// tracer l'état des différents input
export default class ExpenseForm extends React.Component {
  // The state contains data specific to this component that
  // may change over time. The state is user-defined, and it
  // should be a plain JavaScript object.
  
  // state = {
  //   description: '',
  //   note: '',
  //   amount: '',
  //   createdAt: new Date(),
  //   calendarFocused: false,
  //   error: ''
  // }

  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense? props.expense.createdAt : new Date(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState( () => ({ description }) )
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState( () => ({ note }) )
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState( () => ({ amount }) )
  }
  onDateChange = (createdAt) => {
    createdAt && this.setState( () => ({ createdAt }) )
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.description && this.state.amount) {
      this.setState( () => ({error: ''}) )
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt,
        note: this.state.note
      })
    } else {
      this.setState( () => ({error: 'Fields Description and Amount must not be empty'}) )
    }
  }
 
  render() {
    // pour input de Amount, on définit type=text plutot que type=number car on
    // crée notre propre validation (max 2 décimales)
    
    return (
      <div>
        { this.state.error && <p className="errmsg">{this.state.error}</p> }
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <DayPickerInput 
            selectedDays={ this.state.createdAt }
            onDayChange={this.onDateChange}
            onFocus={(e) => console.log('je suis on focus', e)}
            value={this.state.createdAt}
            // dayPickerProps={{selectedDays: this.state.createdAt}}
            // placeholder={placeHolderDate}
          />
          <textarea
            id="" name="" cols="30" rows="5"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add expense</button>
        </form>
      </div>
    )
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  onSubmit: PropTypes.func
} 
