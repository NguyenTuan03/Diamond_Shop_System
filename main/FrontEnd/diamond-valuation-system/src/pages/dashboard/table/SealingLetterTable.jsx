import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
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
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";

export default function SealingLetterTable() {
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const viewSealingLetter = useDisclosure();
  const [sealingLetter, setSealingLetter] = useState([]);
  const [selectedSealingLetter, setSelectedSealingLetter] = useState({});

  const fetchSealingLetter = async (page, id) => {
    let url = "";
    if (user.userAuth.roleid === 2) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/sealing-letter/get/all?page=${page}`;
    } else if (user.userAuth.roleid === 5) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/sealing-letter/customer/get?page=${page}&id=${id}`;
    }
    await axios.get(url).then(function (response) {
      console.log(response.data);
      setSealingLetter(response.data.content);
      setTotalPages(response.data.totalPages);
    });
  };
  useEffect(() => {
    fetchSealingLetter(currentPage, user.userAuth.id);
  }, []);
  useEffect(() => {
    fetchSealingLetter(currentPage, user.userAuth.id);
  }, [currentPage]);
  return (
    <>
      {sealingLetter.length === 0 ? (
        <>No sealing letter to show</>
      ) : (
        <Box p={5}>
          <TableContainer shadow="md" borderRadius="md" bg="white" >
            <Table size={"md"} colorScheme="blue">
              <Thead bg={"blue.500"}>
                <Tr>
                  <Th color="white">No</Th>
                  <Th color="white">Request ID</Th>
                  {user.userAuth.roleid === 2 && <Th color="white">Customer Name</Th>}
                  <Th color="white">Created Date</Th>
                  <Th color="white">Sealing Date</Th>
                  <Th color="white">View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sealingLetter.map((item, index) => (
                  <Tr key={index} _hover={{ bg: "gray.100" }}>
                    <Td>{index + 1}</Td>
                    <Td>{item?.valuationRequestId || "N/A"}</Td>
                    {user.userAuth.roleid === 2 && (
                      <Td>{item?.customerName || "N/A"}</Td>
                    )}
                    <Td>{item?.createdDate?.slice(0, 10) || "N/A"}</Td>
                    <Td>{item?.sealingDate?.slice(0, 10) || "N/A"}</Td>
                    <Td>
                      <IconButton
                        icon={<ViewIcon />}
                        bg={"transparent"}
                        onClick={() => {
                          setSelectedSealingLetter(item);
                          viewSealingLetter.onOpen();
                        }}
                        _hover={{ bg: "gray.100" }}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex mt={4} justifyContent="center">
        <PageIndicator
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
          </Flex>
        </Box>
      )}
      <Modal
        isOpen={viewSealingLetter.isOpen}
        onClose={viewSealingLetter.onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex gap={5}>
              <Icon as={GiDiamondTrophy} w={16} h={16} />
              <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                DiamondVal
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} gap={5} p={5}>
              <Center>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Sealing Letter
                </Text>
              </Center>
              <Text>
                <strong>Company</strong>: DiamondVal
              </Text>
              <Text>
                <strong>Date</strong>:{" "}
                {selectedSealingLetter?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>
                <strong>RE</strong>: Unclaimed Diamond
              </Text>
              <Text>
                <strong>Customer Name</strong>:{" "}
                {selectedSealingLetter?.customerName || "N/A"}
              </Text>
              <Text>Dear {selectedSealingLetter?.customerName},</Text>
              <Text>{selectedSealingLetter?.content}.</Text>
              <Text>
                Our records indicate that you left a diamond with us on{" "}
                <strong>
                  {selectedSealingLetter?.receivedDate?.slice(0, 10)}
                </strong>
                . We have attempted to contact you on{" "}
                <strong>
                  {selectedSealingLetter?.finishDate?.slice(0, 10)}
                </strong>{" "}
                to discuss the return of your diamond, but have been 30 days
                from that time you didn't come to get your diamond and your
                valuation result.
              </Text>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Please note that:
              </Text>
              <UnorderedList spacing={5}>
                <ListItem>
                  Your diamond will be held securely for a period of 30 days
                  from the date of this letter.
                </ListItem>
                <ListItem>
                  After 30 days, if we have not received a response or your
                  diamond remains unclaimed, we reserve the right to [State your
                  company policy on unclaimed items. This could be storing the
                  item for a longer period with a storage fee, selling the item
                  through auction, or donating it to charity].
                </ListItem>
              </UnorderedList>
              <Text marginBottom={20}>Sincerely,</Text>
              <Text>Manager</Text>
              <Text>DiamondVal</Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {user.userAuth.roleid === 2 && (
              <Button
                onClick={() => {
                  window.print();
                }}
              >
                Print
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
