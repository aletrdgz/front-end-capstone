import React from "react";
import {
    Box,
    Heading,
    FormControl,
    FormErrorMessage,
    FormLabel,
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
import { Link } from "react-router-dom";
import Select, { StylesConfig, components } from 'react-select';
import dropdown from "../img/dropdown.svg";
import seatingIcon from "../img/seatingIcon.svg";
import dateIcon from "../img/dateIcon.svg";
import occasionIcon from "../img/occasionIcon.svg";
import timeIcon from "../img/timeIcon.svg";
import dinerIcon from "../img/dinerIcon.svg";

const SeatingPlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={seatingIcon} alt={"Seating icon"} className="select-icon" />
        Seating
    </components.Placeholder>
);
const DatePlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={dateIcon} alt={"Calendar icon"} className="select-icon" />
        Select Date
    </components.Placeholder>
);
const OccasionPlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={occasionIcon} alt={"Occasion icon"} className="select-icon" />
        Occasion
    </components.Placeholder>
);
const TimePlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={timeIcon} alt={"Time icon"} className="select-icon" />
        Select Time
    </components.Placeholder>
);
const DinerPlaceholder = (props) => (
    <components.Placeholder {...props}>
        <img src={dinerIcon} alt={"Diner icon"} className="select-icon" />
        No. of Diners
    </components.Placeholder>
);
const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <img src={dropdown} alt={"Dropdown indicator"} className="select-icon"/>
    </components.DropdownIndicator>
);
// const TwoColumnOption = (props) => (
//     <components.TwoColumnOption {...props}>
//         <HStack><div>{props.data.label}</div><div>{props.data.label}</div></HStack>
//     </components.TwoColumnOption>
// );

const selectStyles: StylesConfig<Select> = {
    control: (styles) => ({ ...styles,
        backgroundColor: "#EDEFEE",
        padding: "0.5rem 1rem 0.5rem 2rem",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: 700,
    }),
    option: (styles, { isFocused, isSelected }) => ({ ...styles,
        backgroundColor: isFocused
            ? "#e0e3e1"
            : isSelected
            ? "#e0e3e1"
            : "#EDEFEE",
        padding: "1rem 2.5rem",
        borderBottom: "1px dashed #495E57",
        color: "#495E57",
        borderRadius: "0.5rem",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: 700,

        ":active" : {
            ...styles[":active"],
            backgroundColor:
            isSelected
            ? "#e0e3e1"
            : undefined,
        },
    }),
    placeholder: (styles) => ({ ...styles,
         color: "#495E57",
         display: "flex",
         alignItems: "center",
         justifyContent: "start",
         gap: "30%",
    }),
    singleValue: (styles) => ({ ...styles, color: "#495E57"}),
    input: (styles) => ({ ...styles, color: "#495E57"}),
    indicatorSeparator: (styles) => ({ ...styles, backgroundColor: "#EDEFEE"}),
    menu: (styles) => ({ ...styles, backgroundColor: "#EDEFEE"}),
};

const seatingOptions = [
    { value: "indoorSeating", label: "Indoor seating" },
    { value: "outdoorSeating", label: "Outdoor seating" }
];
const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "engagement", label: "Engagement" },
    { value: "anniversary", label: "Anniversary" },
    { value: "other", label: "Other" }
];
//fetch
const allowedTime = [];
const dinerOptions = [
    { value: "diners1", label: "1 Diner" },
    { value: "diners2", label: "2 Diners" },
    { value: "diners3", label: "3 Diners" },
    { value: "diners4", label: "4 Diners" },
    { value: "diners5", label: "5 Diners" },
    { value: "diners6", label: "6 Diners" },
    { value: "diners7", label: "7 Diners" },
    { value: "dinersPlus", label: "Other" }
];

const BookingPage = () => {
//     const [selectedSeating, setSelectedSeating]
// const handleChange

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
                                    <Select
                                        id="date"
                                        name="date"
                                        placeholder="Select Date"
                                        components={{Placeholder : DatePlaceholder, DropdownIndicator}}
                                        styles={selectStyles}
                                    >
                                    </Select>
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
                                            DropdownIndicator 
                                            // Option : TwoColumnOption
                                        }}
                                        styles={selectStyles}
                                    >
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