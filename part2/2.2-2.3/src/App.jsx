
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
 let total = props.parts.course.course.parts.reduce((sum,part) => {
    return sum+part.exercises
  }, 0);

  return (
    <div>
        {props.parts.course.course.parts.map(part => 
          <p key={part.id}>
                {part.name + ' ' + part.exercises}
          </p>
        )}
        <h4> Total of {total} exercises</h4>  
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
