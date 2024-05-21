import { Flex, Text } from "@chakra-ui/react";
import { CardMedia } from "@mui/material";

import React from "react";

export default function Home() {
  return (
    <>
      <CardMedia src="../videos/home.mp4" />
      <Flex direction={"row"}>
        <Flex direction={"column"}>
          <Text fontSize={"6xl"} fontWeight={"bold"}>
            Welcome to
          </Text>
          <Text fontSize={"6xl"} fontWeight={"bold"} color={"blue.400"}>
            DiamondVal
          </Text>
          <Text fontSize={"xl"}>Compare Top-Rated Jewelers & Save</Text>
          <Text fontSize={"xl"}>Navigate the diamond market effortlessly.</Text>
        </Flex>
      </Flex>
    </>
  );
}
