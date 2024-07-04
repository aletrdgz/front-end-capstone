import React from "react";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import car from "../img/Group.svg";

const Card = ({ title, price, description, imageSrc, alt }) => {
    return (
          <Box
            color="#333333"
            borderRadius="1rem 1rem 0rem 0rem"
            bg="#EDEFEE"
            flex="1"
          >
            <VStack
              spacing={0}
            >
              <Image
                  src={imageSrc}
                  borderRadius="1rem 1rem 0rem 0rem"
                  alt={alt}
                  objectFit="cover"
                  w="100%"
                  h="11.5rem"
              />
              <VStack
                color="black"
                p="1.5rem"
                spacing="0"
                justifyContent="space-between"
                >
                  <VStack
                    alignItems="left"
                    justifyContent="start"
                    spacing="1.5rem">
                    <HStack justifyContent="space-between">
                      <Heading as="h3">{title}</Heading>
                      <Text
                        my={0}
                        color="#EE9972"
                        fontWeight="700"
                      >{price}</Text>
                    </HStack>
                    <Text color="#333333" my={0}>{description}</Text>
                  </VStack>
                  <VStack
                   w="100%"
                  >
                    <HStack
                      justifyContent="space-between"
                      alignItems="end"
                      pt="1rem"
                      w="100%"
                    >
                      <Text fontWeight="700"><span>Order a delivery</span></Text>
                      <Image src={car} h="1rem"/>
                    </HStack>
                  </VStack>
              </VStack>
            </VStack>
          </Box>
      );
    };

    export default Card;