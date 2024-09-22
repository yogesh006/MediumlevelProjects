import React, { useEffect, useState } from 'react'


const countriesData={
    USA:['New York', 'Los Angeles', 'Chicago'],
    India:['Delhi','Mumbai','Bangalore'],
    Canada:['Toronto','Vancouver','Montreal']
}

function CascadingDropdown() {

    const[countries, setCountries]=useState([])
    const[cities, setCities]=useState([])
    const[selectedCountry, setSelectedCountry]=useState('')
    const[selectedCity, setSelectedCity]=useState('')


    const handleCountryChange=(e)=>{
        const selected = e.target.value
        setSelectedCountry(selected)
        setCities(countriesData[selected]||[])
        setSelectedCity('')
    }


    const handleCityChange = (e)=>{
        setSelectedCity(e.target.value)
    }

    useEffect(()=>{

        const fetchCountries = async()=>{
            setTimeout(()=>{
                setCountries(Object.keys(countriesData))
            },500)
        }

        fetchCountries();
    },[])

  return (
    <div>
        <h1>Cascading Dropdown Example</h1>
        <label htmlFor='countryDropdown'>Select Country: </label>
        <select
            id='countryDropdown'
            value={selectedCountry}
            onChange={handleCountryChange}
        >
            <option value="">--Select Country</option>
            {countries.map((country)=>(
                <option key={country} value={country}>{country}</option>
            ))}
        </select>
        {selectedCountry && (<>
            <label htmlFor='cityDropdown'>Select City:</label>
            <select 
                id='cityDropdown'
                value={selectedCity}
                onChange={handleCityChange}
            >
                <option value="">--Select city</option>
                {cities.map((city)=>(
                    <option key={city} value={city}>{city}</option>
                ))}

            </select>
        </>)}

        <br/>
        <div>
            <h2>Selected Options :</h2>
            <p>Country: {selectedCountry}</p>
            <p>City: {selectedCity}</p>
        </div>
    </div>
  )
}

export default CascadingDropdown