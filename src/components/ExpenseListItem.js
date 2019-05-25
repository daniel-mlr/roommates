// ExpenseListItem.js
// /* eslint-disable react/prop-types */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ExpenseListItem = ({id, description, amount, createdAt} ) => (
  <div>
    <Link to={'./edit/' + id}>
      <h4>{description}</h4>
    </Link>
    <p>
      <span>{amount}</span>--- <span>{createdAt.toString()}</span>
    </p>
  </div>
)
ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.object
} 

export default ExpenseListItem
