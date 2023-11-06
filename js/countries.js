const CountryServer = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries= (countries)=>{
  const container= document.getElementById('container')

  countries.forEach(country=>{
    
    const div= document.createElement('div');
    div.classList.add('country')
    div.innerHTML=`
      <p> Country Name: ${country.name.common} </P>
      <h3> Official Name: ${country.name.official} </h3>
      <h4> Capital: ${country.capital? country.capital[0]: 'No capital'} </h4>
      <button onclick="buttonclick('${country.cca2}')">details</button>
    `
    container.appendChild(div)

  })

}

const buttonclick =code=>{
  const url= `https://restcountries.com/v3.1/alpha/${code}`

  fetch(url)
  .then(res=>res.json())
  .then(json=> displayingTop(json))
  
}

const displayingTop=data2=>{
  const div1= document.getElementById('first-container');
  div1.innerHTML= `
  <h1>Country Name: ${data2[0].name.common} </h1>
  <img src=${data2[0].flags.png}>
  
  `
  
}

CountryServer()





