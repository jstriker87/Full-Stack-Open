const Course = (props) => {
  return (
    <div>
      {props.courses.map(({id, name, parts}) => (
        <div key={id}>
          <Header name={name}/>
          <Content parts={parts}/> 
        </div>
      ))}
    </div>
  );
};
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
 let total = props.parts.parts.reduce((sum,part) => {
    return sum+part.exercises
  }, 0);

  return (
    <div>
        {props.parts.parts.map(part => 
          <p key={part.id}>
            {part.name + ' ' + part.exercises}
          </p>
        )}
        <h4> Total of {total} exercises</h4>  
    </div>
  )
}

export default Course;
