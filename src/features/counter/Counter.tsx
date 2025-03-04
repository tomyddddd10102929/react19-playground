import { useReducer } from 'react'
import { CounterAction, CounterState } from './types'
import { reducer } from './action'

export default function Counter() {
  const [counter, dispatch] = useReducer<CounterState, [action: CounterAction]>(reducer, { count: 0})

  function handlePlusButtonClick() {
    dispatch({ type: "increment"});
  }

  function handleMinusButtonClick() {
    dispatch({ type: "decrement"});
  }

  return (
    <>
      <h1>{counter.count}</h1>
      <button onClick={handlePlusButtonClick}>+</button>
      <button onClick={handleMinusButtonClick}>-</button>
    </>
  )
}
