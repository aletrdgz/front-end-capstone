import React from "react";
import { Box, HStack, VStack, Image, Heading } from "@chakra-ui/react";
import footerLogo from "../img/logo_footer.png"
import './Footer.css'
import { Link } from "react-router-dom";

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
                    <Box className="footer-nav">
                        <VStack alignItems="left">
                            <Heading as="h4">Doormat Navigation</Heading>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a>About</a></li>
                                <li><a>Menu</a></li>
                                <li><Link to="/booking">Reservations</Link></li>
                                <li><a>Order Online</a></li>
                                <li><a>Login</a></li>
                            </ul>
                        </VStack>
                        <VStack alignItems="left">
                            <Heading as="h4">Contact</Heading>
                            <ul>
                                <li><a>Address</a></li>
                                <li><a>Phone Number</a></li>
                                <li><a>Email</a></li>
                            </ul>
                        </VStack>
                        <VStack alignItems="left">
                            <Heading as="h4">Social Media Links</Heading>
                            <ul>
                                <li><a>Instagram</a></li>
                            </ul>
                        </VStack>
                    </Box>
                </HStack>
            </Box>
        </footer>
    );
};
export default Footer;

