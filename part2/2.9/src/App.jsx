import { useState } from 'react'
const App = () => {
const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
    name: newName,
    number: newNumber
  }

   
  if (persons.some(e => e.name === personObject.name)) {
    window.alert(`${newName} is already added to phonebook`)
    setNewName('')
    return -1
  }
  if (personObject.name.length === 0 || personObject.number.length === 0) {
    window.alert(`Name or number has not not been entered`)
    setNewName('')
    return -1
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
 const filterChange = (event) => {
    setFilterName(event.target.value)
    }
  
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with : <input value={filterName} onChange={filterChange}/>
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
        {persons
            .filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
            .map(person => (
                <p key={person.name}>
                    {person.name} {person.number}
                </p>
        ))}
</ul>
    </div>
  )
}

export default App
