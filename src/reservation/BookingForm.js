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
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StyledPickerContainer from "./StyledPickerContainer";
//booking
import seatingIcon from "../img/seatingIcon.svg";
import occasionIcon from "../img/occasionIcon.svg";
import timeIcon from "../img/timeIcon.svg";
import dinerIcon from "../img/dinerIcon.svg";



const BookingForm = (props) => {
    
//initial values
    const [selectedSeating, setSelectedSeating] = useState("");
    const [selectedDate, setSelectedDate] = useState(
        // new Date()
        // dayjs("2024-07-25")
        ""
    );
    const [selectedOccasion, setSelectedOccasion] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDiners, setSelectedDiners] = useState("");

    let allowedTime = props.availableTimes.availableTimes.map(availableTimes => {return {
        value: availableTimes,
        label: availableTimes + " pm"
     }});
    console.log(allowedTime);

    // const clearForm = () => {
    //     setSelectedSeating("");
    //     setSelectedDate("");
    //     setSelectedOccasion("");
    //     setSelectedTime("");
    //     setSelectedDiners("");
    // };
    const handleDateChange = (values) => {
        // const newDate = {
        // value: newValue,
        // //   label: newValue ? newValue.toLocaleDateString() : '',
        // };
        setSelectedDate(values);
        props.dispatch(values);
    };
    // console.log(selectedTime.label);
    console.log("selected date:",selectedDate);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //      props.SubmitForm(e);
    //     console.log(selectedSeating);
    //     // clearForm();
    //   };

    let bookingDetails = [
        {
            iconSrc: seatingIcon,
            alt: "Seating icon",
            placeholder: "Select",
            selection: selectedSeating.label,
        },
        {
            iconSrc: occasionIcon,
            alt: "Occasion icon",
            placeholder: "Select",
            selection: selectedOccasion.label,
        },
        {
            iconSrc: timeIcon,
            alt: "Time icon",
            placeholder: "Select",
            selection: selectedTime.label,
        },
        {
            iconSrc: dinerIcon,
            alt: "Diner icon",
            placeholder: "Select",
            selection: selectedDiners.label,
        }
    ];

    return(
        <form
            // onSubmit={handleSubmit}
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
                    // type="submit"
                    // prob!!!!!
                ><Link to="/booking/confirmation">Reserve a Table</Link>
                    </Button>
            </HStack>
        </form>
    );
};
export default BookingForm;