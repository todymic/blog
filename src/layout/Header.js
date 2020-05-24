import React from "react";
import {Button} from "react-bulma-components";

export const Header = () => {
    return (
        <div className="App-header">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Acceuil
                        </a>
                        <a className="navbar-item">
                            Catégorie
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <a className="navbar-item">
                            A propos
                        </a>

                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Créer article</strong>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Enregistrement</strong>
                                </a>
                                <a className="button is-light">
                                    Connexion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
