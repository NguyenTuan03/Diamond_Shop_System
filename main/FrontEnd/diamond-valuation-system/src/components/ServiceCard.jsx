import {
    Flex,
    Text,
    Button,
    UnorderedList,
    ListItem,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Center,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./GlobalContext/AuthContext";

export default function ServiceCard({
    serviceId,
    type,
    price,
    time,
    attributes,
    color,
}) {
    const nav = useNavigate();
    const auth = useContext(UserContext);
    return (
        <Card border={"1px solid"} w={{ base: "70vw", md: "40vw", lg: "20vw" }}>
            <CardHeader align="center">
                <Heading size={"md"} color={`${color}.400`}>
                    {type}
                </Heading>
            </CardHeader>
            <Flex direction={"column"} align={"center"}>
                <Text fontSize={"5xl"}>${price}</Text>
                <Text fontSize={"lg"}>
                    Valuation time: <strong>{time} days</strong>
                </Text>
            </Flex>
            <CardBody align={"start"}>
                <Text fontSize={"lg"}>We will valuate:</Text>
                <UnorderedList fontSize={"sm"}>
                    {attributes.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </UnorderedList>
            </CardBody>
            <Center>
                <CardFooter>
                    <Link
                        to={`/diamond-valuation-request/${auth.userAuth.id}`}
                        state={{ serviceId: serviceId }}
                    >
                        <Button colorScheme={color} size={"lg"}>
                            Choose
                        </Button>
                    </Link>
                </CardFooter>
            </Center>
        </Card>
    );
}
