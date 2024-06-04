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
import React from "react";
import { Link } from "react-router-dom";
import routes from "../config/Config";

export default function ServiceCard({ id,type, price, time, attributes, color }) {
  console.log("atrr",type);
  return (
    <Card border={"1px solid"} w={"20vw"}>
      <CardHeader align="center">
        <Heading size={"md"} color={`${color}.400`}>
          {type}
        </Heading>
      </CardHeader>
      <Flex direction={"column"} align={"center"}>
        <Text fontSize={"5xl"}>${price}</Text>
        <Text fontSize={"lg"}>
          Valuation time: <strong>{time}</strong>
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
          <Link to={`/diamond-valuation-request/${id}`}>
            <Button colorScheme={color} size={"lg"}>
              Choose
            </Button>
          </Link>
        </CardFooter>
      </Center>
    </Card>
  );
}
