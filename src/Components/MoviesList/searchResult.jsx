import React from "react";
import Card from "@material-ui/core/Card";
import {CardMedia, Grid} from "@mui/material";
import {CardContent, Typography} from "@material-ui/core";
import './searchResult.css';
import {Link} from "react-router-dom";

const SearchResult = ({results, type}) => {

    return (
        <div className="containerResult">
            <Grid container spacing={3}>
                {results.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                        <div className="movie">
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    height="300"
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                />
                                <CardContent>
                                    <Link to={`/${type}/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <Typography variant="h5" component="h2">
                                            {movie.title}
                                        </Typography>
                                    </Link>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movie.release_date}
                                    </Typography>
                                    <Typography variant="body2" className="overviewDetails" color="textSecondary" component="p">
                                        {movie.overview}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SearchResult;
