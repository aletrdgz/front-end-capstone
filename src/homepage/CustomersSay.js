import React from "react";
import { Box, HStack, VStack, Heading } from "@chakra-ui/react";
import CustomersCard from "./CustomersCard";

const customersOpinion = [
    {
        stars: 5,
        name: "Sara Lopez",
        username: "Sara72",
        opinion: "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
        getImageSrc: () => require("../img/testimonials user 1.jpg"),
    },
    {
        stars: 5,
        name: "Jon Do",
        username: "Johnny_Utah",
        opinion: "“We had such a great time celebrating my grandmothers birthday!”",
        getImageSrc: () => require("../img/testimonials user 2.jpg"),
    },
    {
        stars: 5,
        name: "Mia Stewart",
        username: "Mia_Stewart",
        opinion: "“Best Feta Salad in town. Flawless everytime!”",
        getImageSrc: () => require("../img/testimonials user 3.jpg"),
    },
    {
        stars: 5,
        name: "George Marsh",
        username: "Geo_",
        opinion: "“Such a chilled out atmosphere - love it!”",
        getImageSrc: () => require("../img/testimonials user 4.jpg"),
    },
];

const CustomersSay = () => {
    return(
        <section>
            <Box bg="#FBDABB" px="20vw" pt="8rem" pb="11rem">
                <VStack spacing="4rem">
                    <Heading>What our customers say!</Heading>
                    <HStack spacing="1.5rem" alignItems="start">
                        {customersOpinion.map((customerOpinion) => (
                                        <CustomersCard
                                            key={customerOpinion.username}
                                            stars={customerOpinion.stars}
                                            name={customerOpinion.name}
                                            username={customerOpinion.username}
                                            opinion={customerOpinion.opinion}
                                            imageSrc={customerOpinion.getImageSrc()}
                                        />
                                    ))}
                    </HStack>
                </VStack>
            </Box>
        </section>
    );
};
export default CustomersSay;