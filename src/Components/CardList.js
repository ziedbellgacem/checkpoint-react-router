import MovieCard from "./CardMovie";
function ListCard({movies,searchTitle,rating}){
    return (
        <div className="list">
        {
        movies.filter((movie) =>movie.title
              .toLowerCase()
              .includes(searchTitle.toLowerCase().trim()) && movie.rating>= rating )
        .map((movie, i) => (
          <MovieCard movie={movie} key={movie.id} />
        ))
        }


        </div>
    )
}
export default ListCard;