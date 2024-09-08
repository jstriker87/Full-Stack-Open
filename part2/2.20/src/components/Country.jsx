import axios from 'axios'
import { useState, useEffect} from 'react'

const Country = ({ country }) => {
const [weatherData, setWeatherData] = useState(null)
const apiKey= import.meta.env.VITE_WEATHER_API_KEY

useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital[0]},${country[0].name.common}&appid=${apiKey}`;
    axios.get(url)
        .then(response => {
        setWeatherData(response)
      })
      .catch(error => {
        console.error(error);
      });
  }, [country])
    
  if (weatherData){
    let temp = weatherData.data.main.temp - 273.15;
    let wind = weatherData.data.wind.speed; 
    let icon = weatherData.data.weather[0]['icon']
    let weatherIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
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
    <p>temperature {temp} Celsius </p>
    <img src={weatherIconUrl}/>
    <p>wind {wind} m/s</p>

    </div>
  )};
}

export default Country;

