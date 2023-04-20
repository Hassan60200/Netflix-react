import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import DetailsView from "../../Components/Details/DetailsView";
import "../../Components/Details/DetailsView.css";
import axios from "axios";

const DetailsTvShow = () => {

    const {id} = useParams();

    const [detailsTvShow, setDetailsTvShow] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const fetchDetailsData = async () => {
        try {
             await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=e1a35f45338000206c02e4a5cb8118f5&language=fr`).then((res) => {
                 setDetailsTvShow(res?.data);
                 setLoading(false);
             })
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchDetailsData();
    }, []);

    if (error) {
        return <div>Une erreur est survenue lors de la récupération des données.</div>;
    }

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div>
            <DetailsView details={detailsTvShow} />
        </div>
    );
};

export default DetailsTvShow;
