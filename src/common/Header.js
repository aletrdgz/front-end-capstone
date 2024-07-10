import React from "react";
import Nav from "./Nav";
import logo from "../img/logo.png";
import { Box, HStack } from "@chakra-ui/react";

const Header = () => {
    return (
        <header>
            <Box px="20vw" py="2rem">
                <HStack
                justifyContent="space-between"
                alignItems="center"
                spacing="2rem"
                >
                    <img src={logo} alt="Little Lemon Restaurant logo" width={200}/>
                    <Nav />
                </HStack>
            </Box>
        </header>
    );
};
export default Header;
