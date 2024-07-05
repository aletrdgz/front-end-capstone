import React from "react";
import { Box, HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import ownersB from "../img/Mario and Adrian B.jpg"
import restaurant from "../img/restaurant.jpg"

const About = () => {
    return(
        <Box px="20vw" pt="6rem" pb="8rem">
            <HStack>
                <VStack alignItems="left" spacing="2rem" flex="1">
                    <VStack alignItems="left" spacing={0}>
                    <Heading as="h1" mt="3rem" mb={0} color="#495E57">Little Lemon</Heading>
                    <Heading as="h2" mt="0" color="#333333">Chicago</Heading>
                    </VStack>
                    <Text maxWidth="18rem"
                        fontSize="1.25rem"
                        fontWeight="700"
                        color="#333333"
                    >We are a family owned Mediterranean restaurant, focused on traditional 
                    recipes served with a modern twist.</Text>
                </VStack>
                <Box flex={1}>
                    <Image
                    borderRadius='16'
                    objectFit='cover'
                    src={restaurant}
                    alt="Restaurant space"
                    position="relative"
                    top="6rem"
                    h="21rem"
                    w="17rem"
                    />
                    <Image
                    borderRadius='16'
                    objectFit='cover'
                    src={ownersB}
                    alt="Mario and Adrian"
                    position="relative"
                    left="-6rem"
                    h="21rem"
                    w="17rem"
                    />
                </Box>
            </HStack>
        </Box>
    );
};
export default About;