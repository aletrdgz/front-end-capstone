import React from "react";
import { Box, HStack, VStack, Image } from "@chakra-ui/react";
import footerLogo from "../img/logo_footer.png"

const Footer = () => {
    return (
        <footer>
            <Box bg="#edefee" px="20vw" py="4rem">
                <HStack>
                    <Image
                        objectFit='cover'
                        h="18rem"
                        src={footerLogo}
                        alt="Logo"
                    />
                    <VStack>
                        <h3>Doormat Navigation</h3>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                            <li><a>Reservations</a></li>
                            <li><a>Order Online</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </VStack>
                    <VStack>
                        <h3>Contact</h3>
                        <ul>
                            <li><a>Adress</a></li>
                            <li><a>Phone Number</a></li>
                            <li><a>Email</a></li>
                        </ul>
                    </VStack>
                    <VStack>
                        <h3>Social Media Links</h3>
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

