import React, { useContext } from "react";
import {
  Flex,
  WrapItem,
  Avatar,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserContext } from "./GlobalContext/AuthContext";
export default function Profile() {
  const auth = useContext(UserContext);
  const bgColor = useColorModeValue("gray.800", "black");
  return (
    <>
      <Flex
        direction="column"
        align="center"
        mt="8"
      >
        <Avatar
            name={auth.userAuth.fullname}
            src="https://bit.ly/tioluwani-kolawole"
          />
        <Text mt="4" fontSize="md">
          {auth.userAuth.fullname}
        </Text>
        
      </Flex>
    </>
  );
}
