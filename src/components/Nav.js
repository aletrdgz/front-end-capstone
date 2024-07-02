import React from "react";
import { HStack } from "@chakra-ui/react";

const Nav = () => {
    return(
        <nav>
            <HStack spacing="1.75rem">
                <a href="/menu.html" >Home</a>
                <a href="/about.html" >About</a>
                <a href="/menu.html" >Menu</a>
                <a href="/booking.html" >Reservations</a>
                <a href="/ordering.html" >Order Online</a>
                <a href="/login.html" >Login</a>
            </HStack>
        </nav>
    );
};
export default Nav;
