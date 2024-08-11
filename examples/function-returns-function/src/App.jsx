import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [value, setValue] = useState(0)
  
 const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  } 
  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
      Thousand
      </button>
      <button onClick={() => setToValue(0)}>
      Reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
      increment
      </button>
    </div>
  )
}
export default App
