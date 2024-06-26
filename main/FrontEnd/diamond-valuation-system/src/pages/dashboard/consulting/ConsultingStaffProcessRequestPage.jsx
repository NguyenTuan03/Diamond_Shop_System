import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ViewIcon } from "@chakra-ui/icons";
import ZaloChat from "../../../components/zalo/ZaloChat";
export default function ConsultingStaffProcessRequestPage() {
  const user = useContext(UserContext);
  const toast = useToast();
  const pageIndicator = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  if (totalPages !== null) {
    for (let i = 1; i <= totalPages; i++) {
      pageIndicator.push(
        <Button
          key={i}
          colorScheme="teal"
          variant={"outline"}
          onClick={() => {
            setCurrentPage(i);
            fetchProcessRequest(i, user.userAuth.id);
          }}
        >
          {i}
        </Button>
      );
    }
  }
  const viewProcessRequest = useDisclosure();
  const [processRequest, setProcessRequest] = useState([]);
  const [selectedProcessRequest, setSelectedProcessRequest] = useState({});
  const [selectedValuationRequest, setSelectedValuationRequest] = useState({});
  const fetchProcessRequest = (page, consultingStaffId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/get/consulting-staff?page=${page}&consultingStaffId=${consultingStaffId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setProcessRequest(response.data.content);
          setTotalPages(response.data?.totalPages);
        }
      });
  };
  const updateProcessRequest = (processRequestId, status) => {
    axios
      .put(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/update?id=${processRequestId}`,
        {
          status: status,
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          toast({
            title: "Success",
            description: response.data,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchProcessRequest(currentPage, user.userAuth.id);
        }
      });
  };
  useEffect(() => {
    fetchProcessRequest(currentPage, user.userAuth.id);
  }, []);
  const fetchValuationRequest = (pendingRequestId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/get?pending-request-id=${pendingRequestId}`
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setSelectedValuationRequest(response.data);
        }
      });
  };
  return (
    <>
      <TableContainer>
        <Table size={"sm"} colorScheme="blue">
          <Thead bg={"blue.400"}>
            <Tr>
              <Th>No</Th>
              <Th>Customer Name</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {processRequest.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item?.customerName || "N/A"}</Td>
                <Td>{item?.description || "N/A"}</Td>
                <Td>{item?.status || "N/A"}</Td>
                <Td>
                  <IconButton
                    icon={<ViewIcon />}
                    bg={"transparent"}
                    onClick={() => {
                      setSelectedProcessRequest(item);
                      viewProcessRequest.onOpen();
                      fetchValuationRequest(item?.pendingRequestId);
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {pageIndicator}
      <Modal
        isOpen={viewProcessRequest.isOpen}
        onClose={viewProcessRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Process Request ID: {selectedProcessRequest?.id || "N/A"}
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Text>
                <strong>Customer Name</strong>:{" "}
                {selectedProcessRequest?.customerName || "N/A"}
              </Text>
              <Text>
                <strong>Customer Email</strong>:{" "}
                {selectedProcessRequest?.customerEmail || "N/A"}
              </Text>
              <Text>
                <strong>Customer Phone</strong>:{" "}
                {selectedProcessRequest?.customerPhone || "N/A"}
              </Text>
              <Text>
                <strong>Status</strong>:{" "}
                {selectedProcessRequest?.status || "N/A"}
              </Text>
              <Text>
                <strong>Description</strong>:{" "}
                {selectedProcessRequest?.description || "N/A"}
              </Text>
              <Text>
                <strong>Service Type</strong>:{" "}
                {selectedValuationRequest?.serviceName || "N/A"}
              </Text>
              <Text>
                <strong>Price</strong>:{" "}
                {selectedValuationRequest?.servicePrice || "N/A"} vnd
              </Text>
              <Text>
                <strong>Will valuate</strong>:{" "}
                {selectedValuationRequest?.serviceStatistic || "N/A"}
              </Text>
              <Text>
                <strong>Created Date</strong>:{" "}
                {selectedValuationRequest?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>Finish Date</strong>:{" "}
                {selectedValuationRequest?.finishDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>Sealing Date</strong>:{" "}
                {selectedValuationRequest?.sealingDate?.slice(0, 10) || "N/A"}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-around"}>
            {(selectedProcessRequest?.status === "Not resolved yet" && (
              <>
                <Button
                  onClick={() => {
                    viewProcessRequest.onClose();
                    updateProcessRequest(
                      selectedProcessRequest?.id,
                      "Contacted"
                    );
                  }}
                >
                  Contacted
                </Button>
                <ZaloChat phone={selectedProcessRequest?.customerPhone} />
              </>
            )) ||
              (selectedProcessRequest?.status === "Contacted" && (
                <ZaloChat phone={selectedProcessRequest?.customerPhone} />
              )) ||
              (selectedProcessRequest?.status === "Paid" && (
                <>
                  <Button
                    onClick={() => {
                      viewProcessRequest.onClose();
                      updateProcessRequest(
                        selectedProcessRequest?.id,
                        "Diamond Received"
                      );
                    }}
                  >
                    Diamond Received
                  </Button>
                  <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                </>
              ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
