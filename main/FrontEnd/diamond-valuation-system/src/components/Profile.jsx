import React ,{useContext} from "react";
import { Flex,WrapItem,Avatar,Text } from "@chakra-ui/react";
import { UserContext } from "./GlobalContext/AuthContext";
export default function Profile() {
    const auth = useContext(UserContext);
  return (
    <>
      <Flex
    direction="column"
    align="center"
    mt="8"
  >
    <Avatar size="md" name={auth.userAuth.fullname}
            src="https://bit.ly/tioluwani-kolawole" />
    <Text mt="4" fontSize="xl">
    {auth.userAuth.fullname}
    </Text>
    
  </Flex>
    </>

    
  );
}
