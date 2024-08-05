import { useState } from 'react'

function App() {
    const course = 'Half Stack application development'
    const parts = [
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
  ];

  return (
    <div>
        <Header header={course}/>
        <Part parts={parts}/>
        <Total total={parts}/>
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
const Total = (props) => {
    let total = props.total[0].exercises + props.total[1].exercises  + props.total[2].exercises;


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
            {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
            {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
            {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </div>
  )
}

export default App
