import React, {useMemo} from 'react';
import Card from "@material-ui/core/Card"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {Typography} from "@material-ui/core";
import VideoPlayer from "../Video/video";

function ExpandMoreIcon() {
    return null;
}

const DetailsView = ({details, video}) => {
    const genderMovies = details.genres;
    const seasons = details.seasons;
    const videos = video.results;
    const dates = [
        {date: details.release_date, label: "Date de sortie"},
        {date: details.first_air_date, label: "Première diffusion"},
        {date: details.last_air_date, label: "Dernier épisode"},
    ];
    const formattedDates = dates.map((item) => {
        const dateObj = new Date(item.date);
        if (!isNaN(dateObj)) {
            const formattedDate = new Intl.DateTimeFormat("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }).format(dateObj);
            return (
                <h6 key={item.label}>
                    {item.label} : {formattedDate}
                </h6>
            );
        }
        return (
            <h6 key={item.label} className="hideData">
                {item.label} indisponible
            </h6>
        );
    });

    const renderSeasonsAccordion = (seasons) => {
        if (seasons) {
            return seasons.map((season) => (
                <Accordion key={season.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls={`season-${season.id}-content`}
                                      id={`season-${season.id}-header`}>
                        <Typography variant="h6">{season.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{season.overview}</Typography>
                    </AccordionDetails>
                </Accordion>
            ));
        } else {
            return (
                <h6 className="hideData">Aucunes saisons</h6>
            )
        }
    };
    const renderVideos = (videos) => {
        if (videos) {
            return videos.map((youtube) => (
                <VideoPlayer key={youtube.id} videoKey={youtube.key}/>
            ))
        }
    }
    console.log(videos)
    const CountSeasonAndEpisode = ({details}) => {
        const {number_of_seasons, number_of_episodes} = details;

        if (!number_of_seasons && !number_of_episodes) {
            return null;
        }

        return (
            <ul className="listGender">
                {number_of_seasons && (
                    <li className="genderMovie">Nombre de saison : {number_of_seasons}</li>
                )}
                {number_of_episodes && (
                    <li className="genderMovie">Nombre d'épisode :{number_of_episodes}</li>
                )}
            </ul>
        );
    };


    // Memoize the card component to prevent unnecessary renders
    const MemoizedCard = useMemo(() => {
        return (
            <Card className="cardContainer centered">
                {details.title ? (
                    <h1 className="titleMovie">{details.title}</h1>
                ) : (
                    <h1 className="titleMovie">{details.name}</h1>
                )}
                <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
                     alt={details.title}
                />
                {formattedDates}

                {CountSeasonAndEpisode}
                {genderMovies && genderMovies.length > 0 ? (
                    <ul className="listGender">
                        {genderMovies.map((genre) => (
                            <li className="genderMovie" key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                ) : (
                    <div>Aucun genre disponible</div>
                )}
                <section className="detailsOverview">
                    <p>
                        {details.overview}
                    </p>
                </section>
                <section className="detailsSeasonsAccordion">
                    {renderSeasonsAccordion(seasons)}
                </section>
                <section className="listVideos">
                    {renderVideos(videos)}
                </section>
            </Card>
        );
    }, [details.title, details.backdrop_path, formattedDates, details.overview, renderSeasonsAccordion, renderVideos, genderMovies, details.number_of_seasons, details.name, details.number_of_episodes]);

    return (
        <div className="details">
            <div>
                {MemoizedCard}
            </div>
        </div>
    );
};


export default DetailsView;
