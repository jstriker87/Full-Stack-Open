const Phonebook = ({persons, filterName}) => {
  return (
  <div>
    <h2> Numbers </h2>
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
export default Phonebook
