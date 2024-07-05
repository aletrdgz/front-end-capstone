import React from "react";
import {
    Box,
    Heading,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
    VStack,
    HStack,
    Button,
    Image,
} from "@chakra-ui/react";
import Header from "../common/Header";
import "./BookingPage.css";
import waiterFood from "../img/waiterfood.jpg";
import chef from "../img/restaurant chef B.jpg"
import restaurant from "../img/restaurant.jpg";
import ConfirmationPage from './ConfirmationPage';
import { Link } from "react-router-dom";

const BookingPage = () => {
    return(
        <>
            <Header />
            <Box
                bg="#495E57"
                px="20vw"
                py="2rem"
            >
                <VStack alignItems="left">
                <Heading
                            as="h1"
                            my="0"
                            color="#F4CE14"
                        >Reservations</Heading>
                    <form>
                        <HStack alignItems="start" spacing="2.5rem">
                            <VStack alignItems="left" flex={1}>
                                <FormControl>
                                    <FormLabel htmlFor="seating">Seating preferences</FormLabel>
                                    <Select className="selectInput" id="seating" name="seating" placeholder="Seating">
                                        <option value="indoorSeating">Indoor seating</option>
                                        <option value="outdoorSeating">Outdoor seating</option>
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="date">Date</FormLabel>
                                    <Select className="selectInput" id="date" name="date" placeholder="Select Date">
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                    <Select className="selectInput" id="occasion" name="occasion" placeholder="Occasion">
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="other">Other</option>
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                            </VStack>
                            <VStack alignItems="left" flex={1}>
                                <FormControl>
                                    <FormLabel htmlFor="time">Time</FormLabel>
                                    <Select className="selectInput" id="time" name="time" placeholder="Select Time">
                                        <option value="time5">5:00 pm</option>
                                        <option value="time6">6:00 pm</option>
                                        <option value="time7">7:00 pm</option>
                                        <option value="time8">8:00 pm</option>
                                        <option value="time9">9:00 pm</option>
                                        <option value="time10">10:00 pm</option>
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="diners">Number of diners</FormLabel>
                                    <Select className="selectInput" id="diners" name="diners" placeholder="No. of Diners">
                                        <option value="diners1">1 Diner</option>
                                        <option value="diners2">2 Diners</option>
                                        <option value="diners3">3 Diners</option>
                                        <option value="diners4">4 Diners</option>
                                        <option value="diners5">5 Diners</option>
                                        <option value="diners6">6 Diners</option>
                                        <option value="diners7">7 Diners</option>
                                        <option value="dinersPlus">Other</option>
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                            </VStack>
                        </HStack>
                        <HStack justifyContent="center" pt="3rem">
                            <Button
                                className="primary-button"
                                maxWidth="12rem"
                                
                            ><Link to="/booking/confirmation">Reserve a Table</Link>
                                </Button>
                        </HStack>
                    </form>
                </VStack>
            </Box>
            <Box
                px="20vw"
                py="2rem"
            >
                <HStack spacing="2.5rem">
                    <Image 
                    borderRadius='16'
                    objectFit='cover'
                    src={restaurant}
                    alt="Restaurant space"
                    h="12rem"
                    flex={1}
                    />
                    <Image 
                    borderRadius='16'
                    objectFit='cover'
                    src={chef}
                    alt="Restaurant'chef cooking"
                    h="12rem"
                    flex={1}
                    />
                    <Image 
                    borderRadius='16'
                    objectFit='cover'
                    src={waiterFood}
                    alt="A waiter holding a plate of food"
                    h="12rem"
                    flex={1}
                    />
                </HStack>
            </Box>
        </>
    );
};
export default BookingPage;