import MovieList from './MovieList.js';
import movies from '../data/exampleMovieData.js';
import Search from './Search.js';
import InputField from './inputField.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: movies,
      addMovieValue: ''
    };
  }

  onInputChange(event) {
    let query = event.target.value;
    let results = movies.filter((movieObj)=>{
      return movieObj.title.includes(query);
    });
    this.setState({
      results: results
    });
  }

  onAddMovieValue(event) {
    this.setState({
      addMovieValue: event.target.value
    });
  }

  onClickEvent() {
    var newMovieList = this.state.results.concat({title: this.state.addMovieValue});
    this.setState({
      results: newMovieList,
      addMovieValue: ''
    });
  }

  render() {
    return (
      <div className="border">
        <div className="header">
          <h1>Movie List</h1>
        </div>

        <div className="inputField">
          <InputField 
            onClickEvent = {this.onClickEvent.bind(this)} 
            onAddMovieValue = {this.onAddMovieValue.bind(this)}
          />
        </div>
          
        <div className="search">
          <Search onInputChange={this.onInputChange.bind(this)} />
        </div>

        <div>
          <div className="movie-list">
            <MovieList movies={this.state.results} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
