var Search = (props) => (
    <div className="search">
        <input className="search-bar" type="text" onChange={props.onInputChange}/>
        <button className="button">Go!</button>
    </div>
);

export default Search;