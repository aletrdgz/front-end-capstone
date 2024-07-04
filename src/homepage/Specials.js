import React from "react";
import { Box, HStack, Button, Heading } from "@chakra-ui/react";
import Card from "./Card";
import specPic1 from "../img/greek salad.jpg";
import specPic2 from "../img/bruchetta.svg";
import specPic3 from "../img/lemon dessert.jpg";

const specials = [
    {
        title: "Greek salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        imageSrc: specPic1,
        alt: "Greek salad",
    },
    {
        title: "Bruchetta",
        price: "$ 5.99",
        description:
          "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        imageSrc: specPic2,
        alt: "Bruchetta",
    },
    {
        title: "Lemon Dessert",
        price: "$ 5.00",
        description:
          "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSrc: specPic3,
        alt: "Lemon Dessert",
    },
];

const Specials = () => {
    return(
        <section>
            <Box px="20vw" pt="8rem" pb="5rem">
                <HStack alignContent="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        color="#333333"
                        my="0"
                    >This weeks specials!</Heading>
                    <Button
                    className="primary-button"
                    >Menu</Button>
                </HStack>
                <Box>
                    <HStack
                        spacing="1.85rem"
                        mt="3.5rem"
                        alignItems="start"
                    >
                    {specials.map((special) => (
                        <Card
                            key={special.title}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                            imageSrc={special.imageSrc}
                            flexGrow="1"
                        />
                    ))}
                    </HStack>
                </Box>
            </Box>
        </section>
    );
};
export default Specials;