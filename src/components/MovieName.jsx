var MovieName = (props) => (
<tr>
    <td className="movie title">{props.movie.title}</td>
</tr>
)

export default MovieName;





//Also works for self-reference:
// var MovieName = (props) => (
//     <div className="container">
//         <div className="movie title">{props.movie.title}</div>
//     </div>
//     )