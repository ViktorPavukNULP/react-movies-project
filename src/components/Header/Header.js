import React from "react";
import {NavLink} from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <NavLink to={"movies"}>MOVIES</NavLink>
            <NavLink to={"genres"}>GENRES</NavLink>
        </div>
    );
};

export default Header;