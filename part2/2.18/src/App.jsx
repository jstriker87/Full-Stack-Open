import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [value, setValue] = useState('')
  const [allCountries, setCountries] = useState([])
  const [countries, setCurrency] = useState(null)
 const [results, setResults] = useState(null) 
  useEffect(() => {
    console.log('effect run, countries are now', countries)

    if (countries) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all/`)
        .then(response => {
          setCountries(response.data)
          setResults(allCountries.filter(country => country.name.common.toLowerCase().includes(countries.toLowerCase())))

        })
    }
  }, [countries])

  const handleChange = (event) => {
    setValue(event.target.value)
    setCurrency(event.target.value)
    
  }

if (results && results.length > 10) {
    return (
     <div>
        country: <input value={value} onChange={handleChange} />
        Too many matches, specify another filter
    </div>
        )
    }
if (results && results.length == 1) {
    return (
     <div>
     country: <input value={value} onChange={handleChange} />
    <Country country={results}/>
    </div>
        )
    }

if (results) {
  return (
     <div>
    <pre>
      </pre>
        country: <input value={value} onChange={handleChange} />
        {results
            .map(country => (
                <p key={country.capital}>
                    {country.name.common} 
                </p>
        ))}

    </div>
        )
    }

return (
    <div>
        country: <input value={value} onChange={handleChange} />
    </div>
        )
}

export default App
