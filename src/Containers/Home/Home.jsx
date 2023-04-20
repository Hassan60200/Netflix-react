import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Box, CircularProgress} from "@material-ui/core";
import Cards from "../../Components/Card/Card";
import "../../Components/Card/Cards.css";
import "../../Components/Header/Header.css";
import Card from "../../Components/Card/Card";

const Home = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [tvShow, setTvShow] = useState({});


    const fetchMovies = async () => {
        try {
            await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e1a35f45338000206c02e4a5cb8118f5&language=fr").then((res) => {
                setData(res.data.results)
                setLoading(false);
            });

        } catch (err) {
            setError(true);
            throw err;
        }
    };

    const fetchTvShow = async () => {
        try {
            await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=e1a35f45338000206c02e4a5cb8118f5&language=fr").then((res) => {
                setTvShow(res.data.results)
                setLoading(false);
            });

        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchMovies();
        fetchTvShow();
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

    return (
        <div>
            <h2 className="titlePopular">Films populaires</h2>
            <div className="cards">
                {
                    loading ?
                        <Box style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <CircularProgress/>
                        </Box>
                        :
                        data.map(
                            (movie) =>
                                <Cards key={movie.id} id={movie.id} name={movie.title} rating={movie.vote_average}
                                       img={movie.poster_path} type="movie"/>
                        )
                }
            </div>

            <h2 className="titlePopular">Séries populaires</h2>
            <div className="cards">
                {
                    loading ?
                        <Box style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <CircularProgress/>
                        </Box>
                        :
                        tvShow.map(
                            (serie) =>
                                <Card key={serie.id} id={serie.id} name={serie.name} img={serie.poster_path} type="tv"/>
                        )
                }
            </div>
        </div>
    )
};

export default Home;
