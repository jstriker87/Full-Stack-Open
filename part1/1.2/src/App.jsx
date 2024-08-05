import { useState } from 'react'

function App() {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  return (
    <div>
        <Header header={course}/>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        {props.header}
      </p>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

export default App
