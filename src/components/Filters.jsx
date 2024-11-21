function Filters({ onChangeFilter }) {
    const handleChange = (ev) => {
        onChangeFilter(ev.target.value);
    }

    return (
        <form>
            <label htmlFor="search">By Country:</label>
            <input id="search" type="text" onChange={handleChange} />
        </form>
    )
}

export default Filters