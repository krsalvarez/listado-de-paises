import "../scss/layout/Country.scss";

function Country({ countriesData }) {
    return (
        <li className="countries-container">
        <div className="country-card">
            <div className="flag">{countriesData.flag}</div>
            <div className="details">
                <h3>{countriesData.name.official}</h3>
                <p>{countriesData.capital[0]}</p>
                <p>{countriesData.continents[0]}</p> 
           </div>
        </div>
        </li>
    )
}

export default Country