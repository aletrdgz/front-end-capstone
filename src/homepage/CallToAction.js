import React from "react";
import { Box, HStack, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";
import waiterFood from "../img/waiterfood.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return(
        <section>
            <Box
                bg="#495E57"
                px="20vw"
                py="2rem"
            >
                <HStack alignItems="start" spacing="2rem">
                    <VStack
                        alignItems="left"
                        spacing="1.8rem"
                        flex={1}
                    >
                        <VStack
                            alignItems="start"
                            spacing="0"
                        >
                            <Heading
                                as="h1"
                                mb="0"
                                mt="1rem"
                                color="#F4CE14"
                            >Little Lemon</Heading>
                            <Heading
                                as="h2"
                                color="#EDEFEE"
                            >Chicago</Heading>
                        </VStack>
                        <Text
                            maxWidth="18rem"
                            fontSize="1.25rem"
                            color="#EDEFEE"
                            my="0"
                        >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                        <Button
                            className="primary-button"
                            maxWidth="12rem"
                        ><Link to="/booking">Reserve a Table</Link></Button>
                    </VStack>
                    <Box flex={1}>
                        <Image
                            borderRadius="1rem"
                            objectFit="cover"
                            position="absolute"
                            h="25rem"
                            w="29%"
                            src={waiterFood}
                            alt="A waiter holding a plate of food"
                        />
                    </Box>
                </HStack>
            </Box>
        </section>
    );
};
export default CallToAction;