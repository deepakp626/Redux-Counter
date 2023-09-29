import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, incrementByAmount } from './app/counterSlices'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const counter= useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  const incrementCounter = () => {
     dispatch(increment())
  }

  const decrementCounter = () => {
     dispatch(decrement())
  }
  return (
    <div style={{ fontSize: "50px" }}>
      <div>Counter : {counter}</div>
      <button style={{ fontSize: "50px",marginRight:"15px" }} onClick={incrementCounter}>Increment</button>
      <button style={{ fontSize: "50px" }} onClick={decrementCounter}>Decrement</button>

      <button style={{ fontSize: "50px" }} onClick={()=> dispatch(incrementByAmount(50))}>increment by 50</button>
    </div>
  )
}

export default App
