import React from "react";
import {
    Box,
    Heading,
    VStack,
    Image,
} from "@chakra-ui/react";
import Header from "../common/Header";
import "./BookingPage.css";
import BookingForm from "./BookingForm";
import waiterFood from "../img/waiterfood.jpg";
import chef from "../img/restaurant chef B.jpg"
import restaurant from "../img/restaurant.jpg";

const BookingPage = () => {
    return(
        <>
            <Header />
            <Box
                className="section-container"
                bg="#495E57"
            >
                <VStack alignItems="left">
                <Heading
                    as="h1"
                    my="0"
                    color="#F4CE14"
                >Reservations</Heading>
                    <BookingForm />
                </VStack>
            </Box>
            <Box
                className="section-container"
            >
                <Box className="gallery-container">
                    <Image
                    className="gallery-img"
                    src={restaurant}
                    alt="Restaurant space"
                    />
                    <Image
                    className="gallery-img"
                    src={chef}
                    alt="Restaurant'chef cooking"
                    />
                    <Image
                    className="gallery-img"
                    src={waiterFood}
                    alt="A waiter holding a plate of food"
                    />
                </Box>
            </Box>
        </>
    );
};
export default BookingPage;