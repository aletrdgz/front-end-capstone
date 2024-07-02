import React from "react";
import { Box, HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import waiterFood from "../img/waiterfood.jpg";

const CallToAction = () => {
    return(
        <Box bg="#495E57" px="20vw" w="100vw">
            <HStack>
                <VStack alignItems="left" spacing="2rem">
                    <VStack alignItems="left" spacing="0">
                        <Heading as="h1" mt="3rem" mb={0}>Little Lemon</Heading>
                        <Heading as="h2" mt="0">Chicago</Heading>
                    </VStack>
                    <Text maxWidth="18rem">We are a family owned Mediterranean restaurant, focused on traditional 
                        recipes served with a modern twist.</Text>
                </VStack>
                <Image
                    borderRadius="16px"
                    objectFit="cover"
                    maxWidth="23rem"
                    maxHeight="25rem"
                    src={waiterFood}
                    alt="A waiter holding a plate of food"
                    mt="2rem"                />
            </HStack>
        </Box>
    );
};
export default CallToAction;