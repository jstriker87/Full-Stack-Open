import { useState } from 'react'
const App = () => {
const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState(true)
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
    name: newName,
    number: newNumber
  }

   
  if (persons.some(e => e.name === personObject.name)) {
    window.alert(`${newName} is already added to phonebook`)
    setNewName('')
    exit(-1)
  }
  if (personObject.name.length === 0 || personObject.number.length === 0) {
    window.alert(`Name or number has not not been entered`)
    setNewName('')
    exit(-1)
  }

        setNewName('')
        setNewNumber('')
        setPersons(persons.concat(personObject))
   }

 const nameChange = (event) => {
    setNewName(event.target.value)
    }
 const numberChange = (event) => {
    setNewNumber(event.target.value)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <h2> Add a new </h2>
          name: <input value={newName} onChange={nameChange}/>
          number: <input value={newNumber} onChange={numberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    <ul>
        {persons.map(person => (
            <li key={person.name}>{person.name} {person.number}</li>
        ))}
    </ul>
    </div>
  )
}

export default App
