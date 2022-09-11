import React from 'react';
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

const Cards = ({name, img, rating}) => {
    return (
        <Card>
            <img
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{textTransform: 'capitalize'}}>
                      {name}
                </Typography>
                <Typography>
                      {rating}
                </Typography>
               {/* <Link to={`/pokemon/${name}`}>
                    <img src="https://img.icons8.com/color/50/000000/pokeball-2.png" alt="lien vers le pokemon"/>
                </Link>*/}
            </CardContent>
        </Card>
    );
};

export default Cards;
