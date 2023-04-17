import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import DetailsView from "../../Components/Details/DetailsView";
import "../../Components/Details/DetailsView.css";

const Details = () => {

    const {id} = useParams();

    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const fetchDetailsData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e1a35f45338000206c02e4a5cb8118f5&language=fr`);
            const data = await response.json();
            setDetails(data)
            setLoading(false)
        } catch (err) {
            setError(true)
            throw err;
        }
    }
    useEffect(() => {
        fetchDetailsData();
    }, []);


    return (
        <div>
            <DetailsView details={details} />
        </div>
    );
};

export default Details;
