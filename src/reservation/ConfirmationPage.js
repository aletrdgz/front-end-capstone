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
import Header from "../common/Header";
import "./BookingPage.css";
import pasta from "../img/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg";
import fish from "../img/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg";
import ownersA from "../img/Mario and Adrian A.jpg";

const ConfirmationPage = () => {
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

    return(
        <>
            <Header />
            <Box
                bg="#495E57"
                className="section-container"
            >
                <VStack alignItems="left">
                    <form>
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
                    </form>
                </VStack>
                <HStack
                    justifyContent="center"
                    pt="3rem"
                >
                    <Button
                        className="primary-button"
                        maxWidth="12rem"
                    >Confirm reservation</Button>
                </HStack>
            </Box>
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
        </>
    );
};
export default ConfirmationPage;


