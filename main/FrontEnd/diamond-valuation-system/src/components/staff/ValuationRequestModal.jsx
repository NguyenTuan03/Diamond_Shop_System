import {
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ZaloChat from "../zalo/ZaloChat";

export default function ValuationRequestModal({
  viewValuationRequest,
  data,
  onClickReceiveRequestButton,
  onClickMakeReceiptButton,
  onClickCancelRequestButton,
}) {
  return (
    <Modal
      isOpen={viewValuationRequest.isOpen}
      onClose={viewValuationRequest.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Valuation Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={"column"} gap={5}>
            <Text>
              <strong>Request ID</strong>: {data.id}
            </Text>
            <Text><strong>Created Date</strong>: {data.createdDate}</Text>
            <Text>
              <strong>Request Status</strong>: {data.status}
            </Text>
            <Text>
              <strong>Customer name</strong>: {data.customerName}
            </Text>
            <Text>
              <strong>Customer email</strong>: {data.customerEmail}
            </Text>
            <Text>
              <strong>Customer request description</strong>:
            </Text>
            <Text>{data.customerDescription}</Text>
            <Text>
              <strong>Diamond image</strong>:
            </Text>
            <Image
              src={data.customerDiamondImage}
              alt={"Diamond image"}
              w={"100px"}
            />
            <Flex direction={"row"} justifyContent={"space-around"} gap={5}>
              <Button colorScheme="green" onClick={onClickReceiveRequestButton}>
                Receive Request
              </Button>
              <Button colorScheme="yellow" onClick={onClickMakeReceiptButton}>
                Create a receipt
              </Button>
              <Button colorScheme="red" onClick={onClickCancelRequestButton}>
                Cancel Request
              </Button>
            </Flex>
            <Center></Center>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ZaloChat />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
