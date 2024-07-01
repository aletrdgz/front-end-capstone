import React from "react";
import Nav from "./Nav";
import logo from "../img/logo.png";

const Header = () => {
    // const logo = require("../img/logo.png");
    return (
        <header>
            <img src={logo} alt="Little Lemon Restaurant logo"/>
            <Nav />
        </header>
    );
};
export default Header;
