import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// - <Link to={`/movie/${key}`> == <a href="/movie/movie.id">
// - key == id(도서 번호)

function Movie({id, medium_cover_image, title, summary, genres}) {
    return (
        <div>
            <img src={medium_cover_image} alt="title"/>
            <h1>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h1>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (<li key={genre}>{genre}</li>))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;