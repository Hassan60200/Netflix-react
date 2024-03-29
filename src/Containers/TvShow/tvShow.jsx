import React, { useState} from 'react';
import {Link} from "react-router-dom";
import SearchBar from "../../Components/SeachBar/searchBar";
import SearchResult from "../../Components/MoviesList/searchResult";
import axios from "axios";

const Home = () => {
    const [error, setError] = useState(false);
    const [tvShow, setTvShow] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (searchValue) => {
        try {
            setLoading(true);
            await axios
                .get(
                    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=fr&query=${searchValue}`
                )
                .then((res) => {
                    setTvShow(res.data.results);
                    setLoading(false);
                });
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    if (error) {
        return <div style={{margin: '100px'}}>
            <div>ERROR 404 !!!!!!!!!!</div>
            <div style={{margin: '50px'}}>
                <Link to={`/`}>
                    <button>Revenez à la page d'accueil</button>
                </Link>
            </div>
        </div>
    }

    return (
        <div className="movieSearch">
            <SearchBar type="série" handleSearch={(searchValue) => handleSearch(searchValue)} />
            {loading && <p>Loading...</p>}
            {error && <p>An error occurred</p>}
            {tvShow.length > 0 && <SearchResult type="tv" title={false} results={tvShow} />}
        </div>
    )
};

export default Home;
