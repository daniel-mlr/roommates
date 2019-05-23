import React from 'react'
import ExpenseList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashBoardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)
export default ExpenseDashBoardPage
