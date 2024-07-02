import React from "react";
import { Box, HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import ownersB from "../img/Mario and Adrian B.jpg"
import restaurant from "../img/restaurant.jpg"

const About = () => {
    return(
        <Box px="20vw">
            <HStack>
                <VStack alignItems="left" spacing="2rem">
                    <VStack alignItems="left">
                    <Heading as="h1" mt="3rem" mb={0}>Little Lemon</Heading>
                    <Heading as="h2" mt="0">Chicago</Heading>
                    </VStack>
                    <Text maxWidth="18rem">We are a family owned Mediterranean restaurant, focused on traditional 
                    recipes served with a modern twist.</Text>
                </VStack>
                <Box>
                    <Image
                    borderRadius='16'
                    objectFit='cover'
                    boxSize='200'
                    src={restaurant}
                    alt="Restaurant space"
                    />
                    <Image
                    borderRadius='16'
                    objectFit='cover'
                    boxSize='200'
                    src={ownersB}
                    alt="Mario and Adrian"
                    />
                </Box>
            </HStack>
        </Box>
    );
};
export default About;