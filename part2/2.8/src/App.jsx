import { useState } from 'react'
const App = () => {
const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
    name: newName,
    number: newNumber
  }

  if (persons.some(e => e.name === personObject.name)) {
    window.alert(`${newName} is already added to phonebook`)
    setNewName('')
  console.log('pel',personObject.name.length)
  if (personObject.name.length === 0) {
    window.alert(`Name has not not been entered`)
    setNewName('')
  }

}else{
        setNewName('')
        setNewNumber('')
        setPersons(persons.concat(personObject))
   }

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
