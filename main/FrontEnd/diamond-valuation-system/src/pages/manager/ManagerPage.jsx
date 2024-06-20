import {
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ViewIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";
import UploadImage from "../../components/UploadImage";
import { useReactToPrint } from "react-to-print";
export default function ManagerPage() {
  const viewSealingLetterDetail = useDisclosure();
  const viewSealingLetterPrint = useDisclosure();
  const [sealingLetter, setSealingLetter] = useState([]);
  const [selectedSealingLetter, setSelectedSealingLetter] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [valuatedDiamond, setValuatedDiamond] = useState([]);
  const [selectedValuatedDiamond, setSelectedValuatedDiamond] = useState({});
  const viewValuatedDiamondDetail = useDisclosure();

  const viewSealingLetter = () => {
    axios
      .get(`http://localhost:8081/api/process-sealing/get/all?page=1`)
      .then(function (response) {
        console.log(response.data);
        setSealingLetter(response.data.content);
      });
  };
  const handleAcceptSealing = (id, type) => {
    axios
      .get(
        `http://localhost:8081/api/process-sealing/update?id=${id}&type=${type}`
      )
      .then(function (response) {
        setIsUpdate(true);
        console.log(response.data);
      });
  };
  useEffect(() => {
    viewSealingLetter();
    viewValuatedDiamond();
  }, []);
  useEffect(() => {
    if (isUpdate) {
      viewSealingLetter();
      setIsUpdate(false);
    }
  }, [isUpdate]);

  const viewValuatedDiamond = () => {
    axios
      .get(`http://localhost:8081/api/valuated-diamond/get/all`)
      .then(function (response) {
        console.log(response.data);
        setValuatedDiamond(response.data.content);
      });
  };

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"70vh"}
        paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Manager</Text>
        <TableContainer>
          <Table size={"sm"} colorScheme="blue">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>Content</Th>
                <Th>Status</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sealingLetter.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item?.sealingLetterContent.slice(0, 40) || "N/A"}...</Td>
                  <Td>{item?.status || "N/A"}</Td>
                  <Td>
                    <IconButton
                      icon={<ViewIcon />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setSelectedSealingLetter(item);
                        viewSealingLetterDetail.onOpen();
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table size={"sm"} colorScheme="blue">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>Content</Th>
                <Th>Valuated Date</Th>
                <Th>Price</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {valuatedDiamond.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item?.id || "N/A"}</Td>
                  <Td>{item?.createdDate || "N/A"}</Td>
                  <Td>{item?.price || "N/A"} $</Td>
                  <Td>
                    <IconButton
                      icon={<ViewIcon />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setSelectedValuatedDiamond(item);
                        viewValuatedDiamondDetail.onOpen();
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Modal
        isOpen={viewSealingLetterDetail.isOpen}
        onClose={viewSealingLetterDetail.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Sealing Letter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Text>
                Content: {selectedSealingLetter?.sealingLetterContent || "N/A"}
              </Text>
              <Text>Status: {selectedSealingLetter?.status || "N/A"}</Text>
              <Text>
                Sealing date:{" "}
                {selectedSealingLetter?.valuationRequestSealingDate || "N/A"}
              </Text>
              <Text fontWeight={"bold"}>Customer</Text>
              <Text>Name: {selectedSealingLetter?.customerName || "N/A"}</Text>
              <Text fontWeight={"bold"}>Service</Text>
              <Text>Type: {selectedSealingLetter?.serviceName || "N/A"}</Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-around"}>
            {(selectedSealingLetter?.status === "Not resolved yet" && (
              <>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    viewSealingLetterDetail.onClose();
                    handleAcceptSealing(selectedSealingLetter.id, "accept");
                  }}
                >
                  Accept
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    viewSealingLetterDetail.onClose();
                    handleAcceptSealing(selectedSealingLetter.id, "reject");
                  }}
                >
                  Reject
                </Button>
              </>
            )) ||
              (selectedSealingLetter?.status === "Accepted" && (
                <>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      viewSealingLetterDetail.onClose();
                      viewSealingLetterPrint.onOpen();
                    }}
                  >
                    View Sealing Letter
                  </Button>
                </>
              ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={viewSealingLetterPrint.isOpen}
        onClose={viewSealingLetterPrint.onClose}
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
                  Sealing Letter
                </Text>
              </Center>
              <Text>ID: {selectedSealingLetter?.id || "N/A"}</Text>
              <Text>
                Customer Name: {selectedSealingLetter?.customerName || "N/A"}
              </Text>
              <Text>
                Diamond ID: {selectedSealingLetter?.valuatedDiamondId || "N/A"}
              </Text>
              <Text>
                Sealed Date:{" "}
                {selectedSealingLetter?.valuationRequestSealingDate?.slice(
                  0,
                  10
                ) || "N/A"}
              </Text>
              <Text>
                Created date{" "}
                {selectedSealingLetter?.createSealingLetterDate?.slice(0, 10)}
              </Text>
              <Text>{selectedSealingLetter?.sealingLetterContent}.</Text>
              <Flex direction={"column"} align={"end"}>
                <Text>
                  Manager name:{" "}
                  <strong>{selectedSealingLetter?.managerName}</strong>
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handlePrint}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={viewValuatedDiamondDetail.isOpen}
        onClose={viewValuatedDiamondDetail.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Valuated Diamond</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              <Text>ID: {selectedValuatedDiamond?.id || "N/A"}</Text>
              <Text>
                Created date:{" "}
                {selectedValuatedDiamond?.createdDate?.slice(0, 10) || "N/A"}
              </Text>
              <Text>Price: {selectedValuatedDiamond?.price || "N/A"} $</Text>
              <Text>Origin: {selectedValuatedDiamond?.origin || "N/A"}</Text>
              <Text>Shape: {selectedValuatedDiamond?.shape || "N/A"}</Text>
              <Text>
                Carat Weight: {selectedValuatedDiamond?.carat_weight || "N/A"}{" "}
                carat
              </Text>
              <Text>Color: {selectedValuatedDiamond?.color || "N/A"}</Text>
              <Text>Cut: {selectedValuatedDiamond?.cut || "N/A"}</Text>
              <Text>Clarity: {selectedValuatedDiamond?.clarity || "N/A"}</Text>
              <Text>
                Measurements: {selectedValuatedDiamond?.measurements || "N/A"}
              </Text>
              <Text>Polish: {selectedValuatedDiamond?.polish || "N/A"}</Text>
              <Text>
                Symmetry: {selectedValuatedDiamond?.symmetry || "N/A"}
              </Text>
              <Text>
                Fluorescence: {selectedValuatedDiamond?.fluorescence || "N/A"}
              </Text>
              <Text>
                Proportions: {selectedValuatedDiamond?.proportions || "N/A"}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Flex direction={"column"}>
              <UploadImage diamondId={selectedValuatedDiamond?.id} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
