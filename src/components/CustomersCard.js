import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const CustomersCard = ({ stars, name, username, opinion, imageSrc }) => {
    return (
        <VStack
        bg="white"
        borderRadius="16px"
        p="1.5rem"
        spacing="1rem"
        alignItems="left"
        >
            <HStack>
                <Image
                    src={imageSrc}
                    borderRadius="16px"
                    boxSize="2rem"
                />
                <VStack alignItems="left" color="black" spacing="0.25rem">
                    <Heading as="h4" my={0}>{name}</Heading>
                    <Text color="#333333" my={0}>{username}</Text>
                </VStack>
            </HStack>
            <Text color="#333333">{opinion}</Text>
        </VStack>
    );
};

export default CustomersCard;