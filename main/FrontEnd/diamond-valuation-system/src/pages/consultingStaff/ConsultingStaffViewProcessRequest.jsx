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
} from "@chakra-ui/react";
import { handleProcessRequest } from "./ConsultingStaffService";
import React, { useRef, useState } from "react";
import ZaloChat from "../../components/zalo/ZaloChat";
import { GiDiamondTrophy } from "react-icons/gi";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
export default function ConsultingStaffViewProcessRequest({
  isOpen,
  onClose,
  processRequest,
  setIsProcessRequest,
  viewProcessRequest,
  toast,
}) {
  const valuationResultModal = useDisclosure();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
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
              <Text>Name: {processRequest?.customerName}</Text>
              <Text>Email: {processRequest?.customerEmail}</Text>
              <Text>Phone: {processRequest?.customerPhone}</Text>
              <Text>Description: {processRequest?.description}</Text>
              <Divider />
              <Center>
                <Text fontWeight={"bold"}>Service</Text>
              </Center>
              <Text>Type: {processRequest?.serviceName}</Text>
              <Text>Price: {processRequest?.servicePrice}</Text>
              <Text>Time: {processRequest?.serviceTime}</Text>
              <Text>Will valuate: {processRequest?.statisticName}</Text>
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
              processRequest?.type === "Finished" ||
              (processRequest?.type === "Valuated" && (
                <>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      valuationResultModal.onOpen();
                      viewValuationResult(processRequest?.valuationRequestId);
                    }}
                  >
                    View
                  </Button>
                  <ZaloChat customerPhone={processRequest?.customerPhone} />
                </>
              ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={valuationResultModal.isOpen}
        onClose={valuationResultModal.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent ref={componentRef}>
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
          <ModalCloseButton />
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
                  Valuated Date: {valuationResult?.createdDate || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Shape: {valuationResult?.shape || "N/A"}
                </Text>
                <Text fontSize={"sm"}>
                  Measurements: {valuationResult?.measurements || "N/A"}
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
                  Polish: {valuationResult?.poslish || "N/A"}
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
            <Button onClick={handlePrint}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
