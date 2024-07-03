import React, { useContext } from "react";
import SideBar from "./sidebar/SideBar";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function DashBoardLayout({ children }) {
  const bgColor = useColorModeValue("white", "gray.800");
  return (
    <Flex width={"100vw"} height={"100vh"} bg={bgColor} overflowY={"hidden"}>
      <Box w="256px">
        <SideBar />
      </Box>
      <Box flex="1" bg={bgColor} px={5} pt={"120px"}>
        {children}
      </Box>
    </Flex>
  );
}
