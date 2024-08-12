import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Feedback = () => (
  <div>
    <h2>Give Feedback</h2>
  </div>
);

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allRatings, setRatings] = useState([])

  const handleGoodClick = () => {
    setRatings(allRatings.concat('Good'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setRatings(allRatings.concat('Neutral'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setRatings(allRatings.concat('Bad'))
    setBad(bad + 1)
  }

  return (
    <div>
     <Feedback/>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
     <Statistics allRatings={allRatings} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 

const Statistics = (props) => {
    let total = props.good + props.neutral + props.bad
    let avg = (props.good - props.bad) / total
    let positive = (props.good + props.neutral) / total * 100

    if (total === 0) {
    return (
      <div>
       No feedback given
      </div>
    )
  }

    return (
    <div>
      <h2>Statistics</h2>
      <p>
      good {props.good}
      </p>
      <p>
      neutral {props.neutral}
      </p>
      <p>
      bad {props.bad}
      </p>
      <p>
      total {total}
      </p>
      <p>
      average {avg}
      </p>
       <p>
      positive {positive}%
      </p>
    </div>
  )
}


export default App
