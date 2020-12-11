import { render } from '@testing-library/react';
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link,NavLink} from "react-router-dom";
const NavBar = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home <span class="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/contact">contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about">about</NavLink>
                </li>
                </ul>
            </div>
            </nav>
        )
}

export default NavBar