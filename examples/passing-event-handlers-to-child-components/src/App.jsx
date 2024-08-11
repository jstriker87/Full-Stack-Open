import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Display = props => <div> {props.value}</div>
const App = () => {
  const [value, setValue] = useState(0)
  
 const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  } 
  return (
    <div>
     <Display value={value}/>
     <Button handleClick={() => setToValue(1000)} text="thousand" />
     <Button handleClick={() => setToValue(0)} text="reset" />
     <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
const Button = (props) => ( <button onClick={props.handleClick}> {props.text} </button> )
export default App
