import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import hamburgerMenu from "../img/hamburgerMenu.svg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <nav>
            {/* mobile nav */}
            <img
                src={hamburgerMenu}
                alt={"Hidden menu icon"}
                className="menu-icon"
                onClick={toggleMenu}
            />
            {/* nav items */}
            <Box
                className={`nav-links ${menuOpen ? "visible" : ""}`}
            >
                <Link to="/" >Home</Link>
                <Link to="/" >About</Link>
                <Link to="/" >Menu</Link>
                <Link to="/booking" >Reservations</Link>
                <Link to="/" >Order Online</Link>
                <Link to="/" >Login</Link>
            </Box>
        </nav>
    );
};
export default Nav;
