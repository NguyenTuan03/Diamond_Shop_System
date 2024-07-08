import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function NotificationCard({ type, processRequestId }) {
  return (
    <Card border={"md"} shadow={"md"}>
      <CardHeader>
        <Flex align={"center"} gap={2}>
          <Image w={"40px"} src="../images/notification/notification.png" />
          <Text fontWeight={"bold"}>You has a request has been {type} !!!</Text>
        </Flex>
      </CardHeader>
      <CardBody>Request ID: {processRequestId}</CardBody>
    </Card>
  );
}
