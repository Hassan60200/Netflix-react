import React from 'react';
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card"
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";

const Cards = ({name, img, rating = null, id, type}) => {

    const roundRating = rating ? Math.round(rating) / 2 : null;

    return (
        <Card className="cardContainer" title={name}>
            <img
                className="cardImg"
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt={name}
            />
            <CardContent className="cardContent">
                <Link to={`/${type}/${id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                        {name.length < 20 ? name : name.slice(0, 20)}
                    </Typography>
                </Link>
                {rating !== null && (
                    <Typography className="cardRating" title={rating}>
                        <Rating name="round-rating" value={roundRating} precision={0.5} readOnly />
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default Cards;
