import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState([])
  const [countries, setCurrency] = useState(null)

  useEffect(() => {
    console.log('effect run, countries are now', countries)

    if (countries) {
      console.log('fetching countries')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all/`)
        .then(response => {
          setRates(response.data)
          response.data.forEach(country => {
                console.log(country['name']['common']);
          });
           //let test = rates.filter(country => country.name.common.toLowerCase().includes(countries.toLowerCase()))

        })
    }
  }, [countries])

  const handleChange = (event) => {
    setValue(event.target.value)
    setCurrency(event.target.value)
    console.log("Countries are: " + countries)
    
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
