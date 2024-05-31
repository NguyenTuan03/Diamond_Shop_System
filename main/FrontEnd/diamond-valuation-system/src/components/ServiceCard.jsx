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
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../config/Config";

export default function ServiceCard({ type, price, time, attributes, color }) {
  return (
    <Card align={"center"} border={"2px solid"} w={"20vw"}>
      <CardHeader>
        <Heading size={"md"} color={`${color}.400`}>
          {type}
        </Heading>
      </CardHeader>
      <Text fontSize={"6xl"}>${price}</Text>
      <Text fontSize={"lg"}>Valuation time: {time}</Text>
      <CardBody>
        <Text fontSize={"lg"}>We will valuate:</Text>
        <UnorderedList>
          {attributes.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </CardBody>
      <CardFooter>
        <Link to={routes.diamondValuationRequest}>
          <Button colorScheme={color} size={"lg"}>
            Choose
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
