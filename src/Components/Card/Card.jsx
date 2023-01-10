import React, {useState} from 'react';
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card"
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";

const Cards = ({name, img, rating, id}) => {

    const roundRating = Math.round(rating) / 2;

    return (
        <Card title={name}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                style={{width: '100%', height: '80%'}}
                alt={name}
            />
            <CardContent>
                <Link to={`/movie/${id}`} style={{
                    textDecoration: "none", color: "black"
                }}>
                    <Typography gutterBottom variant="h5" component="h2"
                                style={{textTransform: 'capitalize', textAlign: 'center'}}>
                        {name.length < 20 ? name : name.slice(0, 20)}
                    </Typography>
                </Link>
                <Typography style={{textAlign: 'center'}} title={rating}>
                    <Rating name="round-rating" value={roundRating} precision={0.5} readOnly/>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cards;
