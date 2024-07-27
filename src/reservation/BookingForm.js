import React, { useState } from "react";
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
import { seatingOptions, occasionOptions, dinerOptions } from "./BookingFormOptions";
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
import { format } from 'date-fns';


const BookingForm = (props) => {
//initial values
    const [selectedSeating, setSelectedSeating] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedOccasion, setSelectedOccasion] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDiners, setSelectedDiners] = useState("");

    const [formattedDate, setFormattedDate] = useState("");
    const [reservationSubmit, setReservationSubmit] = useState({});

    let allowedTime = props.availableTimes.availableTimes.map(availableTimes => {return {
        value: availableTimes,
        label: availableTimes + " pm"
     }});

    // const clearForm = () => {
    //     setSelectedSeating("");
    //     setSelectedDate("");
    //     setSelectedOccasion("");
    //     setSelectedTime("");
    //     setSelectedDiners("");
    // };
    const handleDateChange = (values) => {
        setSelectedDate(values);
        setFormattedDate(format(new Date(values), "MMMM dd, yyyy"));
        props.timeDispatch(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    //      props.SubmitForm(e);
        setReservationSubmit({
            "seating" : selectedSeating.label,
            "occasion" : selectedOccasion.label,
            "date" : formattedDate,
            "time" : selectedTime.label,
            "diners" : selectedDiners.label,
        }) ;
        props.reservationDispatch(reservationSubmit);
        console.log("form:",props.reservation);
    //     // clearForm();
      };

    

    return(
        <form
            onSubmit={handleSubmit}
            // reservation={reservation}
        >
            <Box className="form-container">
                {/* <VStack alignItems="left" flex={1}> */}
                    <FormControl>
                        <FormLabel htmlFor="seating">Seating preferences</FormLabel>
                        <Select
                            id="seating"
                            name="seating"
                            value={selectedSeating}
                            onChange={values => setSelectedSeating(values)}
                            options={seatingOptions}
                            components={{Placeholder : SeatingPlaceholder, DropdownIndicator}}
                            styles={selectStyles}
                        />
                        <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="date">Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StyledPickerContainer
                                value={selectedDate}
                                handleDateChange={handleDateChange}
                                // type="date"
                            />
                        </LocalizationProvider>
                        <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select
                            id="occasion"
                            name="occasion"
                            value={selectedOccasion}
                            onChange={values => setSelectedOccasion(values)}
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
                            value={selectedTime}
                            onChange={values => setSelectedTime(values)}
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
                            value={selectedDiners}
                            onChange={values => setSelectedDiners(values)}
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
                    type="submit"
                >
                    <Link 
                        to="/booking/confirmation"
                    >Reserve a Table</Link>
                    </Button>
            </HStack>
        </form>
    );
};
export default BookingForm;