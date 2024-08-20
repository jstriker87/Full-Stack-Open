import { useState } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import Phonebook from './components/Phonebook'


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

  return (
    <div>
      <Search filterName={filterName} setFilterName={setFilterName} />
      <Add newName={newName} newNumber={newNumber} addPerson={addPerson} setNewName={setNewName} setNewNumber={setNewNumber}/> 
      <Phonebook persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App
