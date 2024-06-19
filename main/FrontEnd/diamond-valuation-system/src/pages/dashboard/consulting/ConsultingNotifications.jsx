import React from "react";
import { Box,Text, VStack, StackDivider } from "@chakra-ui/react";
export default function ConsultingNotifications() {
  return (
    <div>
      <Box bg="rgb(67 56 202)" w="100%" pl={1} color="white">
        <Text py={3} fontSize="lg" p={3}>
          NOTIFICATION
        </Text>
        <VStack
          pl={4}
          background={"rgb(239 246 255)"}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={1}
          align="stretch"
          justifyContent={"center"}
        >
          <Box lineHeight={"40px"} h="40px" color={"#000"}>
            No notifications
          </Box>
        </VStack>
      </Box>
    </div>
  );
}
