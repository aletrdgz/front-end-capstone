import React from "react";
import {
    Box,
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
    VStack,
    HStack,
    Button,
    Image,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./BookingPage.css";
import pasta from "../img/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg";
import fish from "../img/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg";
import ownersA from "../img/Mario and Adrian A.jpg";
import BookingConfirmation from "./BookingConfirmation";
//booking
import { ReactComponent as SeatingIcon } from "../img/seatingIcon.svg";
import { ReactComponent as OccasionIcon } from "../img/occasionIcon.svg";
import { ReactComponent as TimeIcon } from "../img/timeIcon.svg";
import { ReactComponent as DinerIcon } from "../img/dinerIcon.svg";
import { ReactComponent as DateIcon } from "../img/dateIcon.svg";

const UserDetailsForm = (props) => {

    let bookingDetails = [
        {
            iconComponent: <SeatingIcon className="confirmation-icon" alt="Seating icon"/>,
            selection: props.reservation.reservation.seating,
        },
        {
            iconComponent: <OccasionIcon className="confirmation-icon" alt="Occasion icon"/>,
            selection: props.reservation.reservation.occasion,
        },
        {
            iconComponent: <TimeIcon className="confirmation-icon" alt="Time icon"/>,
            selection: props.reservation.reservation.time,
        },
        {
            iconComponent: <DinerIcon className="confirmation-icon" alt="Diner icon"/>,
            selection: props.reservation.reservation.diners,
        },
        {
            iconComponent: <DateIcon className="confirmation-icon" alt="Date icon"/>,
            selection: props.reservation.reservation.date,
        }
    ];

    const formik = useFormik({
        initialValues: {
          firstName: "",
          email: "",
          lastName: "",
          phoneNumber: "",
          comment: "",
        },
        validationSchema: Yup.object({
          firstName: Yup.string().required("Required"),
          email: Yup.string().email('Invalid email address').required("Required"),
          lastName: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          comment: Yup.string().required("Required").min(25,"Must be at least 25 characters"),
        }),
      });

      const handleFormSubmit = (e) => {
        // alert(JSON.stringify(e, null, 2));
        console.log("submit:",e);
        e.preventDefault();
        props.submitForm(e);
      };

    return(
        <>
            <section>
            <Box
                bg="#495E57"
                className="section-container"
            >
                <VStack alignItems="left">
                    <form
                        onSubmit={handleFormSubmit}
                    >
                        <HStack alignItems="start" spacing="2.5rem">
                            <VStack alignItems="left" flex={1}>
                                <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                                    <Input
                                    id="firstName"
                                    name="firstName"
                                    className="confirm-input"
                                    {...formik.getFieldProps("firstName")}
                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                    <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="confirm-input"
                                    {...formik.getFieldProps("email")}
                                    />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                                <Box
                                    className="booking-details-container"
                                >
                                    {bookingDetails.map((bookingDetail) => (
                                        <BookingConfirmation
                                            key={bookingDetail.selection}
                                            iconComponent={bookingDetail.iconComponent}
                                            selection={bookingDetail.selection}
                                            // flexGrow="1"
                                        />
                                    ))}
                                </Box>
                            </VStack>
                            <VStack alignItems="left" flex={1}>
                                <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
                                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                    <Input
                                    id="lastName"
                                    name="lastName"
                                    className="confirm-input"
                                    {...formik.getFieldProps("lastName")}
                                    />
                                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.errors.phoneNumber && formik.touched.phoneNumber}>
                                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                                    <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="phoneNumber"
                                    className="confirm-input"
                                    {...formik.getFieldProps("phoneNumber")}
                                    />
                                    <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                                    <FormLabel htmlFor="comment">Special Requests</FormLabel>
                                    <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}
                                    className="confirm-input"
                                    {...formik.getFieldProps("comment")}
                                    />
                                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                                </FormControl>
                            </VStack>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            pt="3rem"
                        >
                            <Button
                                className="primary-button"
                                type="submit"
                            >Confirm reservation</Button>
                        </HStack>
                    </form>
                </VStack>
            </Box>
            </section>
            <section>
                <Box
                    className="section-container"
                >
                    <Box className="gallery-container">
                        <Image
                        className="gallery-img"
                        src={pasta}
                        alt="Restaurant pasta dish"
                        />
                        <Image
                        className="gallery-img"
                        src={fish}
                        alt="Restaurant fish dish"
                        />
                        <Image
                        className="gallery-img"
                        src={ownersA}
                        alt="Mario and Adrian"
                        />
                    </Box>
                </Box>
            </section>
        </>
    );
};
export default UserDetailsForm;


