import { useState } from 'react'

const Course = (props) => {
return (
    <div>
      <Header name={props.course.name}/>
      <Content course={props}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
    <h2>
    {props.name}
    </h2>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part parts={props}/>
    </div>
  )
}

const Part = (props) => {
    const result = props.parts.course.course.parts.map(part => part.name + ' ' + part.exercises); 
  return (
    <div>
    {result}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
