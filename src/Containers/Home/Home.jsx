import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Box, CircularProgress} from "@material-ui/core";
import Cards from "../../Components/Card/Card";
import "../../Components/Card/Cards.css";
import "../../Components/Header/Header.css";

const Home = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchMovies = async () => {
        try {
            await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e1a35f45338000206c02e4a5cb8118f5").then((res) => {
                setData(res.data.results)
                console.log(res.data.results)
                setLoading(false);
            });

        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchMovies();

    }, []);

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

    if (loading) {
        return <Box sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box>;
    }


    return (
        <div className="cards">
            {data.map((movie) =>
                <Cards key={movie.id} id={movie.id} name={movie.title} rating={movie.vote_average} img={movie.backdrop_path}/>
            )}
        </div>
    );
};

export default Home;
