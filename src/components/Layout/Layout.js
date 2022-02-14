import React from "react";
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Layout;