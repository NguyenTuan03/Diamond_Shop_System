import React, { useEffect, useState } from "react";
import {
    Image,
    Flex,
    Text,
    Button,
    Box,
    useColorModeValue,
    Container,
    Center,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import routes from "../../config/Config";
import { useToast } from '@chakra-ui/react';

const images = [
    "/images/banner/Diamond.jpg",
    "/images/banner/Diamond1.jpg",

    
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const bgColor = useColorModeValue("white", "black");
    const toast = useToast();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const status = searchParams.get("vnp_ResponseCode");
        if (status === "00" && status !== null) {
            toast({
                title: "Payment successful.",
                description: "We will valuate your product soon!",
                status: "success",
                position: "top-right",
                duration: 2000,
                isClosable: true,
            });
        }
        if (status !== "00" && status !== null) {
            toast({
                title: "Payment Failed!.",
                description: "Oohh, Something went wrong!",
                status: "error",
                position: "top-right",
                duration: 2000,
                isClosable: true,
            });
        }
    }, [toast]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <>
            <Container maxW="100vw">
                <Flex
                    direction={{ base: "column", md: "row", lg: "row" }}
                    bgImage={`url(${images[currentImage]})`}
                    bgSize="contain"
                    bgPosition="left"
                    paddingTop={{ base: 20, md: 10, lg: 2 }}
                    alignItems="center"
                    justifyContent="center"
                    height="70vh"
                    position="relative"
                    transition="background-image 1s ease-in-out"
                >
                    
                    <Center mt={300}>
                        <Flex direction="column" fontWeight="bold" zIndex={2} alignItems="center">
                            <Text
                                fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                                align={{ base: "center", md: "left", lg: "left" }}
                                color="gray.500"
                            >
                                Compare Top-Rated Jewelers & Save
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                                mt={4}
                                align={{ base: "center", md: "left", lg: "left" }}
                                color="#4682B4"
                            >
                                Navigate the diamond market effortlessly.
                            </Text>
                            <Flex
                                direction={{
                                    base: "column",
                                    md: "row",
                                    lg: "row",
                                }}
                                mt={6}
                                align={"center"}
                                gap={5}
                            >
                                <Link to={routes.search}>
                                    <Button
                                        size={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        backgroundColor=" #7B68EE"
                                        colorScheme="purple"
                                        variant="solid"
                                        height="60px"
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        borderRadius="15px"
                                        leftIcon={<Search2Icon />}
                                    >
                                        Search all diamonds
                                    </Button>
                                </Link>
                                <Link to={routes.diamondValuationRequest}>
                                    <Button
                                        size={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        color="#7B68EE"
                                        colorScheme="gray"
                                        variant="outline"
                                        height="60px"
                                        fontSize={{
                                            base: "sm",
                                            md: "md",
                                            lg: "lg",
                                        }}
                                        borderRadius="15px"
                                        leftIcon={<IoDiamond />}
                                    >
                                        Check your diamonds
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Center>
                </Flex>
            </Container>
        </>
    );
}


