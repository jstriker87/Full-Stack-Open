import { useState } from 'react'
import './App.css'

const Feedback = () => (
  <div>
    <h2>Give Feedback</h2>
  </div>
);

const App = () => {
 const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allRatings, setRatings] = useState([])
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

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

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))

  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1     
    setVotes(copy)
  }

  return (
    <div>
     <Feedback/>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
     <Statistics good={good} neutral={neutral} bad={bad}/>
     {anecdotes[selected]}
     <p/>
     <Button handleClick={handleVote} text='vote' />
     <Button handleClick={handleAnecdote} text='next anecdote' />
    <VoteInfo votecount={votes[selected]}/>

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

return(
    <div>
      <h2>Statistics</h2>
        <table className="center">
        <tbody>
        <tr>
        <td><StatisticLine text="good" value ="" /></td>
        <td><StatisticLine text="" value ={props.good} /></td>
        </tr>
        <tr>
        <td><StatisticLine text="neutral" value ="" /></td>
        <td><StatisticLine text="" value ={props.neutral} /></td>
        </tr>
        <tr>
        <td><StatisticLine text="bad" value ="" /></td>
        <td><StatisticLine text="" value ={props.bad} /></td>
        </tr>
        <tr>
        <td><StatisticLine text="average" value ="" /></td>
        <td><StatisticLine text="" value ={avg} /></td>
        </tr>
        <tr>
        <td><StatisticLine text="posittive" value ="" /></td>
        <td><StatisticLine text="" value ={positive + '%'} /></td>
        </tr>
        </tbody>
        </table>

    </div>
    )
}
const VoteInfo = (props) => {
  return (
    <div>
    Has {props.votecount} votes
    </div>
  );
}

const StatisticLine = (props) => {

return(
    <div>
      {props.text} {props.value}
    </div>
    )
}

export default App
