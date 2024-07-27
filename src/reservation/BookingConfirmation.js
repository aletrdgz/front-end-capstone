import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import alert from "../img/alert.svg";

const BookingConfirmation = ({ iconSrc, alt, selection }) => {
    return (
          <Box
            
            // onClick={}
          >
            <HStack spacing="1rem">
                <Image
                    className="confirm-img"
                    src={iconSrc}
                    alt={alt}
                    background="white"
                />
                <Text
                  my={0}
                  color="#EDEFEE"
                  fontWeight="700"
                >
                  {selection}
                </Text>
            </HStack>
          </Box>
      );
    };

    export default BookingConfirmation;