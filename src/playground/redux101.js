//  playground/redux101.js

import { createStore } from 'redux'

// actions generators

const incrementCount = ({ incrementBy=1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})
const decrementCount = ({ decrementBy=1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})
const resetCount = () => ({
  type: 'RESET'
})

// reducers
// --------
//
// 1 - Reducers are PURE functions
// 2 - Never change state or action

const countReducer = (state={ count: 0 }, action) => {
  switch (action.type) {
  case 'INCREMENT': 
    return { count: state.count + action.incrementBy }
  case 'DECREMENT':
    return { count: state.count - action.decrementBy }
  case 'RESET':
    return { count: 0 }
  case 'SET': 
    return { count: action.count }
  default:
    return state
  }
  // return (
  //   action.type === 'INCREMENT' ? {count: state.count + 1} : state
  // )
}


const store = createStore(countReducer)

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.subscribe(() => {
  console.log( store.getState() )
})

store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({count: -21}))
