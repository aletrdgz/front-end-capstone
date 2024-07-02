import React from "react";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Card = ({ title, price, description, imageSrc, alt }) => {
    return (
          <Box w="16.5rem" color="#333333">
            <VStack bg="#EDEFEE" borderRadius="1rem 1rem 0rem 0rem" spacing={0} h="27.5rem">
              <Image
                  src={imageSrc}
                  borderRadius="1rem 1rem 0rem 0rem"
                  alt={alt}
                  objectFit="cover"
                  w="16.5rem"
                  h="11.5rem"
              />
              <VStack color="black" p="1.5rem" spacing="0">
                  <VStack alignItems="left" justifyContent="start" spacing="2rem">
                    <HStack justifyContent="space-between">
                      <Heading as="h4" my={0}>{title}</Heading>
                      <Text my={0}>{price}</Text>
                    </HStack>
                    <Text color="#333333" my={0}>{description}</Text>
                  </VStack>
                  <VStack justifyContent="start">
                    <HStack justifyContent="space-between">
                      <Text>See more</Text>
                      <Image src={require("../img/Group.svg")}/>
                    </HStack>
                  </VStack>
              </VStack>
            </VStack>
          </Box>
      );
    };

    export default Card;