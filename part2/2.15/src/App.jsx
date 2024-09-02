import { useState, useEffect } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import Phonebook from './components/Phonebook'
import personsService from './services/persons'

const App = () => {
const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

const deletePerson = (id) => {
    const person = persons.filter(person => person.id === id)
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
     personsService
    .deletePB(person)
    .then(response => {
        response.data
        setPersons(persons.filter(person => person.id !== id))
    })

    }

  }

useEffect(() => {
    personsService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
    name: newName,
    number: newNumber,
    id: String(persons.length + 1),
  }

    const result = persons.find(e => e.name === personObject.name);
    if (result) {
        if (window.confirm(`is already added to the phonebook. Replace the old number with a new one? ${personObject.name}?`)) {
            const changedPerson = { ...result, number: personObject.number}
            personsService
           .update(result.id,changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== result.id ? person: returnedPerson.data))
              })
        }
        return
    }
    if (personObject.name.length === 0 || personObject.number.length === 0) {
        window.alert(`Name or number has not not been entered`)
        setNewName('')
        return -1
    }
    
   personsService
   .create(personObject)
    .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')

        })
    }

  return (
    <div>
      <Search filterName={filterName} setFilterName={setFilterName} />
      <Add newName={newName} newNumber={newNumber} addPerson={addPerson} setNewName={setNewName} setNewNumber={setNewNumber}/> 
      <Phonebook persons={persons} filterName={filterName} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
