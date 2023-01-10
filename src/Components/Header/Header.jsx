import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";

import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <AppBar className="AppBar" >
                <Toolbar className="title">
                    DerkaFlix
                    <NavLink className="link" to="/">Accueil</NavLink>
                    <NavLink className="link" to="/films">Films</NavLink>
                    <NavLink className="link" to="/series">Séries</NavLink>
                    <NavLink className="link" to="/connexion">Connexion</NavLink>
                    <NavLink className="link" to="/recherches-avancees">Recherches avancées</NavLink>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
