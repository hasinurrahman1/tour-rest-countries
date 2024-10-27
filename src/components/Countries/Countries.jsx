import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    // useState use for display all country
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
            <h3 style={{ textAlign: 'center' }}>Countries: {countries.length}</h3>
            {/* visited country information part */}
            <div>
                <h3 style={{ textAlign: 'center' }}>Visited Country Length: {visitedCountries.length}</h3>
                <h2 style={{ textAlign: 'center' }}>Visited Country List:</h2>
                <div style={{ width: '1020px', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px', border: '3px solid fuchsia', borderRadius: '10px', padding: '10px' }}>
                    {
                        visitedCountries.map(c => <div key={c.cca3}><img src={c.flags.png} /><h3>{c.name.common}</h3><p>{c.population}</p><p>{c.area}</p></div>)
                    }
                </div>
            </div>
            {/* visited country flags list part */}
            <div>
                <h3 style={{ textAlign: 'center' }}>Visited Country Flags Length: {visitedCountryFlags.length}</h3>
                <h2 style={{ textAlign: 'center' }}>Visited Country Flags List:</h2>
                {/* <ul>
                    {
                        // visitedCountryFlags.map(ct => <li key={ct.cca3}><img src={ct.flags.png} /></li>)
                        visitedCountryFlags.map(ct => <img key={ct.cca3} src={ct.flags.png} />)
                    }
                </ul> */}
                <div style={{ width: '1020px', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px', border: '3px solid yellow', borderRadius: '10px', padding: '10px' }}>
                    {
                        visitedCountryFlags.map(ct => <img key={ct.cca3} src={ct.flags.png} />)
                    }
                </div>
            </div>
            {/* display all country in countries-container and pass props for event handle */}
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca3} country1={country} handleVisitedCountries1={handleVisitedCountries} handleVisitedCountryFlags1={handleVisitedCountryFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;