import './Navbar.css';
import '../routes/Skills.css'


import { NavLink } from 'react-router-dom';
import {useState} from "react";

export default function Navbar() {

    const [activePath, setActivePath] = useState('/');

    const handlePathChange = (path) => {
        setActivePath(path);
    }

    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <NavLink className="navbar-a" to={"/"}>
                        <p className="navitem" id="itemstart">accueil</p>
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink className="navbar-a" to={"/about"} activeClassName="active" onClick={() => handlePathChange('/about')}>
                        <p className="navitem">à propos</p>
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink className="navbar-a" to={"/skills"} activeClassName="active" onClick={() => handlePathChange('/skills')}>
                        <p className="navitem">compétences</p>
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink className="navbar-a" to={"/projects"} activeClassName="active" onClick={() => handlePathChange('/projects')} >
                        <p className="navitem">projets</p>
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink className="navbar-a" to={"/experiences"} activeClassName="active" onClick={() => handlePathChange('/experiences')}>
                        <p className="navitem" id="itemend">expériences</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}