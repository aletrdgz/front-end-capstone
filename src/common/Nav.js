import React from "react";
import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <HStack spacing="1.75rem" fontWeight="500" fontSize="1.25rem">
                <Link to="/" >Home</Link>
                <a href="/about.html" >About</a>
                <a href="/menu.html" >Menu</a>
                <Link to="/booking" >Reservations</Link>
                <a href="/ordering.html" >Order Online</a>
                <a href="/login.html" >Login</a>
            </HStack>
        </nav>
    );
};
export default Nav;
