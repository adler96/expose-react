import { useState } from 'react'
import './App.css'

function App() {

  const [ count, setCount ] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  const reset = () => setCount(0);
  const setValue = (value) => setCount(value);


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
      <button onClick={reset}>Reset</button>

      <button onClick={() => setValue(10)}>Set to 10</button>
    </div>
  )
}

export default App
