import React from "react";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Button,
} from "@chakra-ui/react";
import "./BookingPage.css";
import { Link } from "react-router-dom";
import { seatingOptions, occasionOptions, allowedTime, dinerOptions } from "./BookingFormOptions";
//select styling
import Select from 'react-select';
import {
    SeatingPlaceholder,
    OccasionPlaceholder,
    TimePlaceholder,
    DinerPlaceholder,
    DropdownIndicator,
    TwoColumnsMenuList,
    selectStyles
} from "./BookingFormStyling";
//date picker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StyledPickerContainer from "./StyledPickerContainer";

const BookingForm = () => {
//     const [selectedSeating, setSelectedSeating]
// const handleChange

    return(
        <form>
                        <Box className="form-container">
                            {/* <VStack alignItems="left" flex={1}> */}
                                <FormControl>
                                    <FormLabel htmlFor="seating">Seating preferences</FormLabel>
                                    <Select
                                        id="seating"
                                        name="seating"
                                        options={seatingOptions}
                                        components={{Placeholder : SeatingPlaceholder, DropdownIndicator}}
                                        styles={selectStyles}
                                    />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="date">Date</FormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <StyledPickerContainer />
                                    </LocalizationProvider>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                    <Select
                                        id="occasion"
                                        name="occasion"
                                        options={occasionOptions}
                                        components={{Placeholder : OccasionPlaceholder, DropdownIndicator}}
                                        styles={selectStyles}
                                    >
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="time">Time</FormLabel>
                                    <Select
                                        id="time"
                                        name="time"
                                        options={allowedTime}
                                        components={{Placeholder : TimePlaceholder, DropdownIndicator}}
                                        styles={selectStyles}
                                    >
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="diners">Number of diners</FormLabel>
                                    <Select
                                        id="diners"
                                        name="diners"
                                        options={dinerOptions}
                                        components={{Placeholder : DinerPlaceholder,
                                            DropdownIndicator,
                                            MenuList : TwoColumnsMenuList,
                                            // Option : PaddedHoverOption,
                                        }}
                                        styles={selectStyles}
                                    >
                                    </Select>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                            {/* </VStack> */}
                        </Box>
                        <HStack justifyContent="center" pt="3rem">
                            <Button
                                className="primary-button"
                                maxWidth="12rem"
                            ><Link to="/booking/confirmation">Reserve a Table</Link>
                                </Button>
                        </HStack>
                    </form>
    );
};
export default BookingForm;