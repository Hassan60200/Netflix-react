import React, {useState} from "react";
import "./searchBar.css";

const SearchBar = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <div className="containerSearchBar">
            <div className="searchBar">
                <input className="searchInput" type="text" placeholder="Rechercher un film..." value={searchTerm}
                       onChange={handleChange}/>
                <button className="searchButton" onClick={handleSubmit}>Chercher</button>
            </div>
        </div>

    );
};

export default SearchBar;
