// ExpenseListItem.js
/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses.js'
import {Link} from 'react-router-dom'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt} ) => (
  <div>
    <Link to={'./edit/' + id}>
      <h4>{description}</h4>
    </Link>
    <p>
      <span>{amount}</span>--- <span>{createdAt.toString()}</span>
      <button 
        onClick={ () => {
          // console.log(id)
          dispatch(removeExpense({ id }))
        }}
      >Remove</button>
    </p>
  </div>
)


export default connect()(ExpenseListItem)

// const ExpenseListItem = (props) => (
//   <div>
//     <h4>{props.description}</h4>
//     <p>
//       <span>{props.amount}</span>--- <span>{props.createdAt}</span>
//       <button 
//         onClick={ () => {
//           console.log(props)
//           props.dispatch(removeExpense(props.id))
//         }}
//       >Remove</button>
//     </p>
//   </div>
// )

