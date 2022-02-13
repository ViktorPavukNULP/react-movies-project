import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import "./Layout.css";

const Layout = () => {
    return (
        <>
            <div className="Layout">
                <NavLink to={"movies"}>MOVIES</NavLink>
                <NavLink to={"genres"}>GENRES</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;