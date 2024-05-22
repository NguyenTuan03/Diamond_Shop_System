import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../config/Config";

export default function ServiceCard({ type, price, time, color }) {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      border={"2px solid"}
      borderColor={`${color}.400`}
      w={"300px"}
      height={"500px"}
    >
      <div style={{ display: "flex", alignItems: "center", height: "100px" }}>
        <Text fontSize={"xl"}>DiamondVal</Text>
      </div>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={`${color}.400`}>
        {type}
      </Text>
      <Text fontSize={"6xl"}>${price}</Text>
      <div style={{ display: "flex", alignItems: "center", height: "200px" }}>
        <Text fontSize={"lg"} m={"0 10px 0 10px"}>
          <strong>{type}</strong> valuate from {time} days
        </Text>
      </div>
      <Link to={routes.diamonValuationRequest}>
        <Button colorScheme={color}>Valuate Now</Button>
      </Link>
    </Flex>
  );
}
