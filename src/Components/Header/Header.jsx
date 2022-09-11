import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";

import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <AppBar className="AppBar" >
                <Toolbar className="title">
                    Netflix
                    <NavLink className="link" to="/">Accueil</NavLink>
                    <NavLink className="link" to="/types">Films</NavLink>
                    <NavLink className="link" to="/favoris">Séries</NavLink>
                    <NavLink className="link" to="/contact">Connexion</NavLink>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
