import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  Text,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { ViewIcon } from "@chakra-ui/icons";
import ZaloChat from "../../../components/zalo/ZaloChat";
import { Link } from "react-router-dom";
import routes from "../../../config/Config";
export default function CustomerProcessRequest() {
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
  const fetchProcessRequest = (page, customerId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/get/customer?page=${page}&customerId=${customerId}`
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setProcessRequest(response.data.content);
          setTotalPages(response.data.totalPages);
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
            <ModalCloseButton />
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
              <ZaloChat phone={selectedProcessRequest?.consultingStaffPhone} />
            )) ||
              (selectedProcessRequest?.status === "Contacted" && (
                <>
                  <Link
                    to={routes.diamondService}
                    state={{
                      pendingRequestId:
                        selectedProcessRequest?.pendingRequestId,
                    }}
                  >
                    <Button colorScheme="teal">Service</Button>
                  </Link>
                  <ZaloChat
                    phone={selectedProcessRequest?.consultingStaffPhone}
                  />
                </>
              )) ||
              (selectedProcessRequest?.status === "Paid" && (
                <ZaloChat
                  phone={selectedProcessRequest?.consultingStaffPhone}
                />
              ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
