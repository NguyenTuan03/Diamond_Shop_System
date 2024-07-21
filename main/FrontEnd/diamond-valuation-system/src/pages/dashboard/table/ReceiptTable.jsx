import {
  Center,
  Flex,
  IconButton,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PageIndicator from "../../../components/PageIndicator";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import { format, parseISO } from "date-fns";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../../config/Config";
import ReceiptModal from "../modal/ReceiptModal";
import { ViewIcon } from "@chakra-ui/icons";

export default function ReceiptTable() {
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const viewReceipt = useDisclosure();
  const [receipts, setReceipts] = useState([]);
  const [selectedValuationReceipt, setSelectedValuationReceipt] =
    useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const fetchReceipt = (id, page) => {
    if (isUsers) {
      let url = "";
      if (user.userAuth.authorities[0].authority === "Consulting staff") {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-receipt/consulting-staff/get?id=${id}&page=${page}`;
      } else if (user.userAuth.authorities[0].authority === "Customer") {
        url = `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-receipt/customer/get?id=${id}&page=${page}`;
      }
      axios.get(url).then((res) => {
        console.log(res.data);
        setReceipts(res.data.content);
        setTotalPages(res.data.totalPages);
      });
    }
  };
  useEffect(() => {
    fetchReceipt(user.userAuth.id, currentPage);
  }, []);
  return (
    <>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Receipt
          </Text>
        </Center>
        {totalPages === 0 ? (
          <Center>No receipt to show</Center>
        ) : (
          <Skeleton isLoaded={receipts.length > 0} height={"200px"}>
            <TableContainer shadow={"md"} borderRadius={"md"}>
              <Table>
                <Thead
                  bg="gray.600"
                  color="white"
                  mb={5}
                  boxShadow="sm"
                  borderRadius="md"
                  maxW="100%"
                  minW="100%"
                >
                  <Tr>
                    <Th color="white">No</Th>
                    <Th color="white">Request ID</Th>
                    <Th color="white">Created Date</Th>
                    <Th color="white">Payment Date</Th>
                    <Th color="white">Customer Name</Th>
                    <Th color="white">Staff Name</Th>
                    <Th color="white">Description</Th>
                    <Th color="white">View</Th>
                  </Tr>
                </Thead>
                <Tbody variant="simple" bg="gray.200" color="black">
                  {receipts.map((receipt, index) => (
                    <Tr key={index} _hover={{ bg: "gray.100" }}>
                      <Td>{index + 1}</Td>
                      <Td>
                        <Link
                          to={routes.processRequest}
                          state={{
                            processRequestId: receipt?.processRequestId,
                          }}
                        >
                          <Tooltip label="Click to view process request">
                            <Flex
                              p={2}
                              gap={2}
                              align={"center"}
                              justify={"space-around"}
                              borderRadius={"20px"}
                              _hover={{ bg: "blue.100" }}
                            >
                              {receipt.processRequestId || "N/A"}
                              <FaExternalLinkAlt />
                            </Flex>
                          </Tooltip>
                        </Link>
                      </Td>
                      <Td>
                        {receipt.createdDate
                          ? format(
                              parseISO(receipt.createdDate),
                              "dd/MM/yyyy - HH:mm:ss"
                            )
                          : "N/A"}
                      </Td>
                      <Td>
                        {receipt.paymentDate
                          ? format(
                              parseISO(receipt.paymentDate),
                              "dd/MM/yyyy - HH:mm:ss"
                            )
                          : "N/A"}
                      </Td>
                      <Td>{receipt.customerName}</Td>
                      <Td>{receipt.consultingStaffName}</Td>
                      <Td>{receipt.description}</Td>
                      <Td>
                        <IconButton
                          icon={<ViewIcon />}
                          bg={"transparent"}
                          color={"black"}
                          onClick={() => {
                            setSelectedValuationReceipt(receipt);
                            viewReceipt.onOpen();
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
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Center>
          </Skeleton>
        )}
      </Flex>

      <ReceiptModal
        viewReceipt={viewReceipt}
        selectedValuationReceipt={selectedValuationReceipt}
      />
    </>
  );
}
