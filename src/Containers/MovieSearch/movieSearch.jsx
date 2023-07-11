import SearchBar from "../../Components/SeachBar/searchBar";
import {useState} from "react";
import axios from "axios";
import SearchResult from "../../Components/MoviesList/searchResult";

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (searchValue) => {
        try {
            setLoading(true);
            await axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=fr&query=${searchValue}`
                )
                .then((res) => {
                    setMovies(res.data.results);
                    setLoading(false);
                });
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    return (
        <div className="movieSearch">
            <SearchBar type="film" handleSearch={(searchValue) => handleSearch(searchValue)} />
            {loading && <p>Loading...</p>}
            {error && <p>An error occurred</p>}
            {movies.length > 0 && <SearchResult type="movie" title={true} results={movies} />}
        </div>
    );
};

export default MovieSearch;
