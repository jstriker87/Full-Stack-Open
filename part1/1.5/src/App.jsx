import { useState } from 'react'

function App() {
const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
        <Header header={course}/>
        <Part part={course}/>
        <Total total={course}/>


    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        {props.header.name}
      </p>
    </div>
  )
}
const Total = (props) => {
    let total = props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises
  return (
    <div>
      <p>
        {total}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
            {props.part.parts[0].name} {props.part.parts[0].exercises}
      </p>
      <p>
            {props.part.parts[1].name} {props.part.parts[1].exercises}
      </p>
      <p>
            {props.part.parts[2].name} {props.part.parts[2].exercises}
      </p>
    </div>
  )
}

export default App
