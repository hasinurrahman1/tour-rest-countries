import { useState } from 'react';
import './Country.css'
const Country = ({ country1, handleVisitedCountries1, handleVisitedCountryFlags1 }) => {

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }

    const { name, flags, population, area, cca3 } = country1;
    return (
        <div className={`country ${visited ? 'country-bg': 'country-bgd'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{color: visited ? 'black': 'yellow'}}>{name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited} type="button">{visited ? 'Visited': 'Going'}</button>
            <button onClick={()=>handleVisitedCountries1(country1)} type="button">Mark as Read</button>
            <button onClick={()=>handleVisitedCountryFlags1(country1)} type="button">Mark Flags</button>
            {visited ? 'I have a visited country': 'I want to visit'}
        </div>
    );
};

export default Country;
