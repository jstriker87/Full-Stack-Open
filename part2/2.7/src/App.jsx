import { useState } from 'react'
const App = () => {
const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
    name: newName
  }
  if (persons.some(e => e.name === personObject.name)) {
    window.alert(`${newName} is already added to phonebook`)
    setNewName('')
}else{
        setNewName('')
        setPersons(persons.concat(personObject))
   }

}
 const PersonChange = (event) => {
    setNewName(event.target.value)
    }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={PersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    <ul>
        {persons.map(person => (
            <li key={person.name}>{person.name}</li>
        ))}
    </ul>
    </div>
  )
}

export default App
