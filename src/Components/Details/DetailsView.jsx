import React, {useMemo} from 'react';
import Card from "@material-ui/core/Card"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {Typography} from "@material-ui/core";

function ExpandMoreIcon() {
    return null;
}

const DetailsView = ({details}) => {
    console.log(details)
    const genderMovies = details.genres;
    const seasons = details.seasons;
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
                <ul className="listGender">
                    <li className="genderMovie">Nombre de saison : {details.number_of_seasons}</li>
                    <li className="genderMovie">Nombre d'épisode :{details.number_of_episodes}</li>
                </ul>
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
            </Card>
        );
    }, [details.title, details.backdrop_path, formattedDates, details.overview, renderSeasonsAccordion, genderMovies, details.number_of_seasons, details.name, details.number_of_episodes]);

    return (
        <div className="details">
            <div>
                {MemoizedCard}
            </div>
        </div>
    );
};


export default DetailsView;
