import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Text,
  Button,
  ModalFooter,
  useToast,
  Box,
  Center,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";

export default function PendingRequestTable() {
  const toast = useToast();
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewPendingRequest = useDisclosure();
  const [isLoadedPendingRequest, setIsLoadedPendingRequest] = useState(false);
  const [pendingRequest, setPendingRequest] = useState([]);
  const [selectedPendingRequest, setSelectedPendingRequest] = useState(null);
  const fetchPendingRequest = (page, id) => {
    setIsLoadedPendingRequest(true);
    let url = "";
    if (user.userAuth.authorities[0].authority === "Consulting staff" || user.userAuth.authorities[0].authority === "Manager") {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/pending-request/get/all?page=${page}`;
    } else if (user.userAuth.authorities[0].authority === "Customer") {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/pending-request/customer/get?page=${page}&id=${id}`;
    }
    axios.get(url).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        setPendingRequest(response.data.content);
        setTotalPages(response.data?.totalPages);
        setIsLoadedPendingRequest(false);
      }
    });
  };
  const receivePendingRequest = (consultingStaffId, pendingRequestId) => {
    setIsLoadedPendingRequest(true);
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/process-request/create`,
        {
          pendingRequestId: pendingRequestId,
          consultingStaffId: consultingStaffId,
        }
      )
      .then(function (response) {
        setIsLoadedPendingRequest(false);
        if (response.data === "Have already received !") {
          toast({
            title: response.data,
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: response.data,
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch(function (error) {
        setIsLoadedPendingRequest(false);
        toast({
          title: error.response.data,
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const cancelPendingRequest = (pendingRequestId) => {
    setIsLoadedPendingRequest(true);
    axios
      .delete(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/pending-request/delete?id=${pendingRequestId}`
      )
      .then(function (response) {
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            setIsLoadedPendingRequest(false);
            toast({
              title: response.data,
              status: "success",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
            setTimeout(() => {
              fetchPendingRequest(currentPage, user.userAuth.id);
            }, 1000);
          } else {
            setIsLoadedPendingRequest(false);
            toast({
              title: response.data,
              status: "error",
              position: "top-right",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  useEffect(() => {
    fetchPendingRequest(currentPage, user.userAuth.id);
  }, [currentPage]);
  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize="4xl" fontWeight="bold">
            Pending Request
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center>No pending request to show</Center>
        ) : (
          <Skeleton isLoaded={pendingRequest.length > 0} height={"200px"}>
            <TableContainer shadow="md" borderRadius="md">
              <Table size={"sm"} colorScheme="blue">
                <Thead bg={"blue.500"}>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Customer Name</Th>
                    <Th>Email</Th>
                    <Th>Phone Number</Th>
                    <Th>Description</Th>
                    <Th>Created Date</Th>
                    <Th>View</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pendingRequest.map((item, index) => (
                    <Tr key={index} _hover={{ bg: "gray.100" }}>
                      <Td>{item?.id}</Td>
                      <Td>{item?.customerName || "N/A"}</Td>
                      <Td>{item?.customerEmail || "N/A"}</Td>
                      <Td>{item?.customerPhone || "N/A"}</Td>
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
            <Center m={"50px 0 0 0"}>
              <PageIndicator
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </Center>
          </Skeleton>
        )}
      </Flex>
      <Modal
        isOpen={viewPendingRequest.isOpen}
        onClose={viewPendingRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton isLoaded={selectedPendingRequest !== null}>
              Pending Request ID: {selectedPendingRequest?.id || "N/A"}
            </Skeleton>
          </ModalHeader>
          <ModalBody>
            <Skeleton isLoaded={selectedPendingRequest !== null}>
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
            </Skeleton>
          </ModalBody>
          <Skeleton isLoaded={selectedPendingRequest !== null}>
            {(user.userAuth.authorities[0].authority === "Customer" && (
              <ModalFooter justifyContent={"space-around"}>
                <Button
                  isLoading={isLoadedPendingRequest}
                  colorScheme="red"
                  onClick={() => {
                    cancelPendingRequest(selectedPendingRequest?.id);
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            )) ||
              (user.userAuth.authorities[0].authority === "Consulting staff" && (
                <ModalFooter justifyContent={"space-around"}>
                  <Button
                    isLoading={isLoadedPendingRequest}
                    colorScheme="teal"
                    onClick={() => {
                      receivePendingRequest(
                        user?.userAuth?.id,
                        selectedPendingRequest?.id
                      );
                    }}
                  >
                    Receive
                  </Button>
                </ModalFooter>
              ))}
          </Skeleton>
        </ModalContent>
      </Modal>
    </>
  );
}
