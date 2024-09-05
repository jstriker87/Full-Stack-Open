import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [countries, setCurrency] = useState(null)

  useEffect(() => {
    console.log('effect run, countries are now', countries)

    if (countries) {
      console.log('fetching countries')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countries}`)
        .then(response => {
          setRates(response)

        })
    }
  }, [countries])

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCurrency(value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        country: <input value={value} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App
