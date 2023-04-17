import React, {useMemo} from 'react';
import Card from "@material-ui/core/Card"

const DetailsView = ({details}) => {
    const genderMovies = details.genres;
    const releaseDate = details.release_date;

    // Format the date and check if it is valid outside of the render method
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(releaseDate);
    let formattedDate = null;
    if (!isNaN(dateObj)) {
        formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(dateObj);
    }

    // Memoize the card component to prevent unnecessary renders
    const MemoizedCard = useMemo(() => {
        return (
            <Card className="cardContainer centered">
                <h1 className="titleMovie">{details.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
                     alt={details.title}
                />
                {formattedDate ? (
                    <h6>Date de sortie : {formattedDate}</h6>
                ) : (
                    <h6>Date de sortie indisponible</h6>
                )}
                {genderMovies && genderMovies.length > 0 ? (
                <ul className="listGender">
                    {genderMovies.map((genre) => (
                        <li className="genderMovie" key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                ) : (
                    <div>Aucun genre disponible</div>
                )}
                <section>
                    <p>
                        {details.overview}
                    </p>
                </section>
            </Card>
        );
    }, [details.title, details.backdrop_path, formattedDate, details.overview]);

    return (
        <div className="details">
            <div>
                {MemoizedCard}
            </div>
        </div>
    );
};


export default DetailsView;
