import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './Store/Counter'
import "./App.css"
const App = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  
  
  return (
    <>
     <p id='counter-value'>count: {count}</p>
     <div className='container'>
      <button id="increase-button" onClick={() => dispatch(increment())}>Increase </button>
      <button id="decrease-button" onClick = {() => dispatch(decrement())}>Decrease</button>
      <button id="reset-button" onClick= {() => dispatch(reset())}>Reset</button>
     </div>
     </>
  )

}

export default App