var InputField = (props) => (
  <div className = "inputFiendDiv">
    <input className="add-field" type="text" onChange = {props.onAddMovieValue} />
    <button className="add-button" onClick={ props.onClickEvent }> Add! </button>
  </div>
);

export default InputField;