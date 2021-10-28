import {Link} from "react-router-dom"
import "./CarStyle.css"
function MovieCard({movie}){
    return (
        <Link to ={`/DesandTrailer/${movie.id}`}>
        <div className="card">
        <img src={movie.posterURL} alt="movie"/> 
         <div className="container">
            <h5>{movie.title}</h5>
            <span>{"⭐".repeat(movie.rating)}</span>
         </div>
        </div>
        </Link>
    )

}
export default MovieCard;