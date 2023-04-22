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
                    <NavLink className="link" to="/movies">Films</NavLink>
                    <NavLink className="link" to="/tv-show">Séries</NavLink>
                    <NavLink className="link" to="/login">Connexion</NavLink>
                    <NavLink className="link" to="/register">Inscription</NavLink>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
