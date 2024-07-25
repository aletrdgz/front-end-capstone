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
            <Box
              className="specials-card-container"
            >
              <Image
                  className="specials-card-img"
                  src={imageSrc}
                  alt={alt}
              />
              <VStack
                className="specials-card-text"
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
            </Box>
          </Box>
      );
    };

    export default Card;