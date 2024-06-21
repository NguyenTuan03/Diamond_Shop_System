import {
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Icon,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { handleProcessRequest } from "./ConsultingStaffService";
import React, { useRef, useState } from "react";
import { GiDiamondTrophy } from "react-icons/gi";
import { useReactToPrint } from "react-to-print";
import ZaloChat from "../../../components/zalo/ZaloChat";

import axios from "axios";
export default function ConsultingRequest({
  isOpen,
  onClose,
  processRequest,
  setIsProcessRequest,
  viewProcessRequest,
  toast,
}) {
  const valuationResultModal = useDisclosure();
  const resultRef = useRef();
  const handlePrintResult = useReactToPrint({
    content: () => resultRef.current,
  });

  const [valuationResult, setValuationResult] = useState({});
  const viewValuationResult = async (i) => {
    axios
      .get(
        `http://localhost:8081/api/valuation-request/valuated-diamond?id=${i}`
      )
      .then(function (response) {
        console.log(response.data);
        setValuationResult(response.data);
      });
  };
  const valuationReceiptModal = useDisclosure();
  const [valuationReceipt, setValuationReceipt] = useState({});
  const receiptRef = useRef();
  const handlePrintReceipt = useReactToPrint({
    content: () => receiptRef.current,
  });
  const viewValuationReceipt = async (i) => {
    axios
      .get(
        `http://localhost:8081/api/valuation-receipt/get?valuation-request-id=${i}`
      )
      .then(function (response) {
        console.log(response.data);
        setValuationReceipt(response.data);
      });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Process Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Center>
                <Text fontWeight={"bold"}>Customer</Text>
              </Center>
              <Text>Name: {processRequest?.customerName || "N/A"}</Text>
              <Text>Email: {processRequest?.customerEmail || "N/A"}</Text>
              <Text>Phone: {processRequest?.customerPhone || "N/A"}</Text>
              <Text>Description: {processRequest?.description || "N/A"}</Text>
              <Divider />
              <Center>
                <Text fontWeight={"bold"}>Service</Text>
              </Center>
              <Text>Type: {processRequest?.serviceName || "N/A"}</Text>
              <Text>Price: {processRequest?.servicePrice || "N/A"}</Text>
              <Text>Time: {processRequest?.serviceTime || "N/A"}</Text>
              <Text>
                Will valuate: {processRequest?.statisticName || "N/A"}
              </Text>
              <Divider />
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-around"}>
            {(processRequest?.type === "Not resolved yet" && (
              <>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    handleProcessRequest(
                      toast,
                      "receive",
                      processRequest?.type,
                      processRequest?.consultingStaffId,
                      processRequest?.valuationRequestId
                    ).then(() => {
                      setIsProcessRequest(true);
                      viewProcessRequest.onClose();
                    });
                  }}
                >
                  Receive
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleProcessRequest(
                      toast,
                      "reject",
                      processRequest?.type,
                      processRequest?.consultingStaffId,
                      processRequest?.valuationRequestId
                    ).then(() => {
                      setIsProcessRequest(true);
                      viewProcessRequest.onClose();
                    });
                  }}
                >
                  Reject
                </Button>
              </>
            )) ||
              (processRequest?.type === "Processing" && (
                <>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      handleProcessRequest(
                        toast,
                        "diamond",
                        processRequest?.type,
                        processRequest?.consultingStaffId,
                        processRequest?.valuationRequestId
                      ).then(() => {
                        setIsProcessRequest(true);
                        viewProcessRequest.onClose();
                      });
                    }}
                  >
                    Diamond Received
                  </Button>
                  <ZaloChat customerPhone={processRequest?.customerPhone} />
                </>
              )) ||
              (processRequest?.type === "Diamond Received" && (
                <>
                  <Button
                    onClick={() => {
                      setIsProcessRequest(true);
                      valuationReceiptModal.onOpen();
                      viewValuationReceipt(processRequest?.valuationRequestId);
                    }}
                  >
                    Receipt
                  </Button>
                  <ZaloChat customerPhone={processRequest?.customerPhone} />
                </>
              )) ||
              (processRequest?.type === "Valuated" && (
                <>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      setIsProcessRequest(true);
                      valuationResultModal.onOpen();
                      viewValuationResult(processRequest?.valuationRequestId);
                    }}
                  >
                    View
                  </Button>
                  <ZaloChat customerPhone={processRequest?.customerPhone} />
                </>
              )) ||
              ((processRequest?.type === "Finished" ||
                processRequest?.type === "Overdue") && (
                <>
                  <SimpleGrid columns={2} spacing={10}>
                    <Button
                      colorScheme="green"
                      onClick={() => {
                        setIsProcessRequest(true);
                        valuationResultModal.onOpen();
                        viewValuationResult(processRequest?.valuationRequestId);
                      }}
                    >
                      View
                    </Button>
                    <ZaloChat customerPhone={processRequest?.customerPhone} />
                    <Button
                      onClick={() => {
                        handleProcessRequest(
                          toast,
                          "customer_received",
                          processRequest?.type,
                          processRequest?.consultingStaffId,
                          processRequest?.valuationRequestId
                        ).then(() => {
                          setIsProcessRequest(true);
                          viewProcessRequest.onClose();
                        });
                      }}
                    >
                      Cust. Received
                    </Button>
                    <Button>Lost receipt</Button>
                  </SimpleGrid>
                </>
              )) || <ZaloChat customerPhone={processRequest?.customerPhone} />}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={valuationResultModal.isOpen}
        onClose={valuationResultModal.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent ref={resultRef}>
          <ModalHeader>
            <Flex direction={"row"} alignItems={"center"}>
              <Icon as={GiDiamondTrophy} w={16} h={16} />
              <Text
                fontFamily={"The Nautigal"}
                fontSize="4xl"
                fontWeight={"bold"}
                m={"10px "}
              >
                DiamondVal
              </Text>
            </Flex>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Flex
              direction={"column"}
              gap={5}
              justifyContent={"center"}
              align={"center"}
              border={"2px solid"}
              borderColor={"gray.200"}
              p={5}
            >
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Valuation Result ID: {valuationResult?.id}
              </Text>

              <Flex direction={"column"} gap={5} p={2} w={"70vw"}>
                <Text fontSize={"sm"} bg={"blue.300"} p={1} fontWeight={"bold"}>
                  DIAMOND GRADING REPORT
                </Text>
                <Text fontSize={"sm"}>
                  Valuated Date:{" "}
                  {valuationResult?.createdDate?.slice(0, 10) || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Shape: {valuationResult?.shape || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Measurements: {valuationResult?.measurements || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Price: {valuationResult?.price || "N/A"} USD
                </Text>
                <Text fontSize={"sm"} bg={"blue.300"} p={1} fontWeight={"bold"}>
                  GRADING RESULT
                </Text>
                <Text fontSize={"sm"}>
                  Carat Weight: {valuationResult?.carat_weight || "N/A"} carat
                </Text>
                <Text fontSize={"sm"}>
                  Color Grade: {valuationResult?.color || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Clarity: {valuationResult?.clarity || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Cut Grade: {valuationResult?.cut || "N/A"}
                </Text>
                <Text fontSize={"sm"} bg={"blue.300"} p={1} fontWeight={"bold"}>
                  ADDITIONAL GRADING INFORMATION
                </Text>
                <Text fontSize={"sm"}>
                  Polish: {valuationResult?.polish || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Symmetry: {valuationResult?.symmetry || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Fluorescence: {valuationResult?.fluorescence || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Cut Grade: {valuationResult?.cut || "N/A"}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handlePrintResult}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={valuationReceiptModal.isOpen}
        onClose={valuationReceiptModal.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent ref={receiptRef}>
          <ModalHeader>
            <Flex direction={"row"} alignItems={"center"}>
              <Icon as={GiDiamondTrophy} w={16} h={16} />
              <Text
                fontFamily={"The Nautigal"}
                fontSize="4xl"
                fontWeight={"bold"}
                m={"10px "}
              >
                DiamondVal
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex
              direction={"column"}
              gap={5}
              border={"2px solid"}
              borderColor={"gray.200"}
              p={5}
            >
              <Center>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Valuation Receipt
                </Text>
              </Center>
              <Text>ID: {valuationReceipt?.id || "N/A"}</Text>
              <Text>
                Created Date:{" "}
                {valuationReceipt?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>Customer ID: {valuationReceipt?.customerId || "N/A"}</Text>
              <Text>Name: {valuationReceipt?.customerName || "N/A"}</Text>
              <Text>
                Phone number: {valuationReceipt?.customerPhoneNumber || "N/A"}
              </Text>
              <Text>Service: {valuationReceipt?.serviceName || "N/A"}</Text>
              <Text>Price: {valuationReceipt?.price || "N/A"} $</Text>
              <Text>
                Valuation Finish Date:{" "}
                {valuationReceipt?.valuationFinishDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                Valuation Sealing Date:{" "}
                {valuationReceipt?.valuationSealingDate?.slice(0, 10) || "N/A"}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handlePrintReceipt}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
