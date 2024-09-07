import axios from 'axios'
import { useState} from 'react'

let runcount = 0
const Country = ({ country }) => {
const [weatherData, setWeatherData] = useState(null)
const apiKey = 'KEY'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital[0]},${country[0].name.common}&appid=${apiKey}`;
if (runcount <1){
axios.get(url)
        .then(response => {
            setWeatherData(response.data)
        })
    runcount++
    }

console.log(country)
  return (
    <div>
     <h2> {country[0].name.common} </h2>
     capital {country[0].capital[0]}
    <br/>
     area {country[0].area}
    <h2> languages </h2>
    <ul>
      {Object.values(country[0].languages).map((item, index) => (
        <li key={index}>{item}</li>

      ))}
    </ul>
    <img src={country[0].flags['png']}/>
    <h2> Weather in {country[0].name.common}</h2>
    {/*temperature {weatherData.main}*/}
    </div>
  );
}

export default Country;

