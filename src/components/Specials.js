import React from "react";
import { Box, HStack, Button, Heading } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
    {
        title: "Greek salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../img/greek salad.jpg"),
        alt: "Greek salad",
    },
    {
        title: "Bruchetta",
        price: "$ 5.99",
        description:
          "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        getImageSrc: () => require("../img/bruchetta.svg"),
        alt: "Bruchetta",
    },
    {
        title: "Lemon Dessert",
        price: "$ 5.00",
        description:
          "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../img/lemon dessert.jpg"),
        alt: "Lemon Dessert",
    },
];

const Specials = () => {
    return(
        <section>
            <Box px="20vw" pt="8rem" pb="4rem">
                <HStack alignItems="center" justifyContent="space-between">
                    <Heading as="h2" >This Weeks Specials!</Heading>
                    <Button bg="#F4CE14" borderRadius="16px">Menu</Button>
                </HStack>
                <Box>
                    <HStack spacing="1.85rem">
                    {specials.map((special) => (
                        <Card
                            key={special.title}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                            imageSrc={special.getImageSrc()}
                        />
                    ))}
                    </HStack>
                </Box>
            </Box>
        </section>
    );
};
export default Specials;