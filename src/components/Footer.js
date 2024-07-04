import React from "react";
import { Box, HStack, VStack, Image, Heading } from "@chakra-ui/react";
import footerLogo from "../img/logo_footer.png"
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Box bg="#edefee" px="20vw" py="4rem">
                <HStack alignItems="start">
                    <Image 
                        objectFit='cover'
                        h="18rem"
                        src={footerLogo}
                        alt="Logo"
                        pr="10%"
                    />
                    <VStack flex={1} alignItems="left">
                        <Heading as="h4">Doormat Navigation</Heading>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                            <li><a>Reservations</a></li>
                            <li><a>Order Online</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </VStack>
                    <VStack flex={1} alignItems="left">
                        <Heading as="h4">Contact</Heading>
                        <ul>
                            <li><a>Adress</a></li>
                            <li><a>Phone Number</a></li>
                            <li><a>Email</a></li>
                        </ul>
                    </VStack>
                    <VStack flex={1} alignItems="left">
                        <Heading as="h4">Social Media Links</Heading>
                        <ul>
                            <li><a>Instagram</a></li>
                        </ul>
                    </VStack>
                </HStack>
            </Box>
        </footer>
    );
};
export default Footer;

