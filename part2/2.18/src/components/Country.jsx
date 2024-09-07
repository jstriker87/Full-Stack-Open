const Country = ({ country }) => {
  console.log(country[0].flags['png']);

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
    </div>
  );
}

export default Country;

