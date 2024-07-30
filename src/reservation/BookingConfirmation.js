import React from "react";
import { Box, HStack, Text,
  //  VStack
  } from "@chakra-ui/react";

const BookingConfirmation = ({ iconComponent, selection }) => {
    return (
          <Box
            // onClick={}
          >
            <HStack spacing="1rem">
                {iconComponent}
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