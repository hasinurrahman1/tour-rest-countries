import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountryFlags, setVisitedCountryFlags] = useState([]);

    const handleVisitedCountries = (country1) => {
        // console.log('add this to your visited country')
        // console.log(country1)
        const newVisitedCountries = [...visitedCountries, country1]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedCountryFlags = (country1) => {
        const newVisitedCountryFlags = [...visitedCountryFlags, country1]
        setVisitedCountryFlags(newVisitedCountryFlags);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Country Length: {visitedCountries.length}</h3>
                <h2>Visited Country List:</h2>
                <ul>
                    {
                        visitedCountries.map(c => <li key={c.cca3}>{c.name.common} <img src={c.flags.png} /> <li>{c.population}</li></li>)
                    }
                </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca3} country1={country} handleVisitedCountries1={handleVisitedCountries} handleVisitedCountryFlags1={handleVisitedCountryFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;