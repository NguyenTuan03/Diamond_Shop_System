import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function DiamondCheck() {
  return (
    <Flex
      direction={"row"}
      alignItems="center"
      justifyContent="center"
      w={"100vw"}
      m={"50px 0 0 0"}
      gap={20}
      boxShadow={"2xl"}
    >
      <Flex direction={"column"}>
        <Text fontSize="6xl" fontWeight={"bold"}>
          Check any diamond's
        </Text>
        <Text fontSize="6xl" fontWeight={"bold"} color={"blue.400"}>
          price & quality
        </Text>
        <Text fontSize="xl" m={"30px 0 50px 0"}>
          Transact with confidence — get fair price, cut score, visual carat and
          more
        </Text>
        <Flex direction={"row"}>
          <Input placeholder="Enter Certificate ID" size={"lg"} />
          <Button colorScheme="blue" size="lg" m={"0 0 0 20px"}>
            Run free check
          </Button>
        </Flex>
      </Flex>
      <Image
        src="../images/diamond-check.png"
        w={"350px"}
      />
    </Flex>
  );
}
