import MovieName from './MovieName.js';

var MovieList = (props) => (
    <table>
        <tbody>
            {props.movies.map((movie)=>{
                return (
                    <MovieName movie={movie}/>
                )
            })}
        </tbody>
    </table>
);

export default MovieList;











//Also works for self reference: 
// var MovieList = (props) => (
//     <ul>
//          {props.movies.map((movie) => {
//             return (
//             <li>
//                 <MovieName movie={movie}/>
//             </li>
//             )
//         })}
//     </ul>
// );