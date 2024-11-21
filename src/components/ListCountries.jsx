import Country from "./Country";

function ListCountries({ countriesList }) {

    const countriesItems = countriesList.map((countryItem) => {
        return <Country countriesData={countryItem} key={countryItem.name.official} />
    })

    return (
        <section>
            <ul>
                {countriesItems}
            </ul>
        </section>
    )
}

export default ListCountries