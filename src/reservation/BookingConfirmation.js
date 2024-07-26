import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import alert from "../img/alert.svg";

const BookingConfirmation = ({ iconSrc, alt, placeholder, selection }) => {
    return (
          <Box
            
            // onClick={}
          >
            <HStack>
                <Image
                    //   className="specials-card-img"
                    src={iconSrc}
                    alt={alt}
                    fill="#EE9972"
                    background="white"
                />
                <VStack 
                    // justifyContent="space-between"
                >
                      <Image 
                        src={alert}
                        alt="Alert icon"
                        // fill="#EE9972"
                      />
                      <Text
                        my={0}
                        color="#EE9972"
                        fontWeight="700"
                        background="white"
                      >{
                        // placeholder
                        selection
                    //    ? selection : placeholder
                       }</Text>
                    </VStack>
            </HStack>
          </Box>
      );
    };

    export default BookingConfirmation;