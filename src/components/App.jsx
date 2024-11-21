import "../scss/App.scss";
import countriesData from "../../services/data.json";
import Header from "./Header";
import ListCountries from "./ListCountries";
import Filters from "./Filters";


function App() {
    return (
        <>
        <Header />
        <main>
            <ListCountries countriesList={countriesData}/>
            <Filters />
        </main>
        </>
    )
}

export default App
