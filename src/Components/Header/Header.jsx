import React, { useContext } from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Header = () => {
 /*   const { facebookStatus } = useContext(FacebookContext);

    const renderContent = () => {
        if (facebookStatus === "connected") {
            return (
                <div className="avatarLogged">
                    <Stack direction="row" spacing={5}>
                        <NavLink className="link" to="/logout">Déconnexion</NavLink>
                        <Avatar alt="FB" src="" />
                    </Stack>
                </div>
            );
        } else {
            return (
                <>
                    <NavLink className="link" to="/login">Connexion</NavLink>
                    <NavLink className="link" to="/register">Inscription</NavLink>
                </>
            );
        }
    };*/

    return (
        <header>
            <AppBar className="AppBar">
                <Toolbar className="title">
                    DerkaFlix
                    <NavLink className="link" to="/">Accueil</NavLink>
                    <NavLink className="link" to="/movies">Films</NavLink>
                    <NavLink className="link" to="/tv-show">Séries</NavLink>
                    <NavLink className="link" to="/login">Connexion</NavLink>
                    <NavLink className="link" to="/register">Inscription</NavLink>
                    <div style={{ flex: 1 }}></div>
                 {/*   {renderContent()}*/}
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;

