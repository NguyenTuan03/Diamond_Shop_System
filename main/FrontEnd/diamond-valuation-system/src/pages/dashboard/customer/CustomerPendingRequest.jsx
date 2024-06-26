import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import {
  Button,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { ViewIcon } from "@chakra-ui/icons";
import PageIndicator from "../../../components/PageIndicator";
export default function CustomerPendingRequest() {
  const user = useContext(UserContext);
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewPendingRequest = useDisclosure();
  const [pendingRequest, setPendingRequest] = useState([]);
  const [selectedPendingRequest, setSelectedPendingRequest] = useState({});
  const fetchPendingRequest = (page, customerId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/pending-request/get?page=${page}&customerId=${customerId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setPendingRequest(response.data.content);
          setTotalPages(response.data?.totalPages);
        }
      });
  };
  useEffect(() => {
    fetchPendingRequest(currentPage, user.userAuth.id);
  }, []);
  return (
    <>
      <TableContainer>
        <Table size={"sm"} colorScheme="blue">
          <Thead bg={"blue.400"}>
            <Tr>
              <Th>No</Th>
              <Th>Customer Name</Th>
              <Th>Description</Th>
              <Th>Created Date</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pendingRequest.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item?.customerName || "N/A"}</Td>
                <Td>{item?.description || "N/A"}</Td>
                <Td>{item?.createdDate?.slice(0, 10) || "N/A"}</Td>
                <Td>
                  <IconButton
                    icon={<ViewIcon />}
                    bgColor={"transparent"}
                    onClick={() => {
                      setSelectedPendingRequest(item);
                      viewPendingRequest.onOpen();
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <PageIndicator totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <Modal
        isOpen={viewPendingRequest.isOpen}
        onClose={viewPendingRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Pending Request ID: {selectedPendingRequest?.id || "N/A"}
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Text>
                <strong>Created Date</strong>:{" "}
                {selectedPendingRequest?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>Description</strong>:{" "}
                {selectedPendingRequest?.description || "N/A"}
              </Text>
              <Text>
                <strong>Customer Name</strong>:{" "}
                {selectedPendingRequest?.customerName || "N/A"}
              </Text>
              <Text>
                <strong>Email</strong>:{" "}
                {selectedPendingRequest?.customerEmail || "N/A"}
              </Text>
              <Text>
                <strong>Phone Number</strong>:{" "}
                {selectedPendingRequest?.customerPhone || "N/A"}
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
