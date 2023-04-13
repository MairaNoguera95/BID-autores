import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page"to="/autores">
                                Autores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/autores/agregar">
                                Nuevo Autor
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
