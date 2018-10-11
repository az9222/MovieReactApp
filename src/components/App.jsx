import MovieList from './MovieList.js';
import movies from '../data/exampleMovieData.js';
import Search from './Search.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: movies,
        }
    }

    onInputChange(event) {
        let query = event.target.value;
        let results = movies.filter((movieObj)=>{
            return movieObj.title.includes(query)
        });
        this.setState({
            results: results
        })
    }

    render() {
        return (
            <div className="border">
                <div className="header">
                    <h1>Movie List</h1>
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
        )
    }
}

export default App;