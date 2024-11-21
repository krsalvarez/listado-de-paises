import "../scss/App.scss";
import countriesData from "../../services/data.json";
import Header from "./Header";
import ListCountries from "./ListCountries";
import Filters from "./Filters";
import { useState } from "react";


function App() {

    const [searchValue, setSearchValue] = useState("");
    const changeSearch = (valueInput) => {
        setSearchValue(valueInput);
        }
    const filteredCountries = countriesData.filter((countryItem) => {
        return countryItem.name.official.includes(searchValue);
    })

    return (
        <>
        <Header />
        <main>
            <Filters onChangeFilter={changeSearch} />
            <ListCountries countriesList={filteredCountries} />
        </main>
        </>
    )
}

export default App
