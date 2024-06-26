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
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Icon,
  Flex,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";

import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import axios from "axios";
import PageIndicator from "../../../components/PageIndicator";
import { useReactToPrint } from "react-to-print";
import ZaloChat from "../../../components/zalo/ZaloChat";
import { Link } from "react-router-dom";
import routes from "../../../config/Config";
export default function ProcessRequestTable() {
  const toast = useToast();
  const user = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [processRequest, setProcessRequest] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedProcessRequest, setSelectedProcessRequest] = useState({});
  const [selectedValuationRequest, setSelectedValuationRequest] = useState({});
  const [selectedValuationResult, setSelectedValuationResult] = useState({});
  const viewValuationRequest = useDisclosure();
  const viewValuationResult = useDisclosure();
  const valuationResultRef = useRef();
  const handlePrintValuationResult = useReactToPrint({
    content: () => valuationResultRef.current,
  });
  const fetchProcessRequest = (page, id) => {
    let url = "";
    if (user.userAuth.roleid === 2) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/process-request/get/all?page=${page}`;
    } else if (user.userAuth.roleid === 3) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/process-request/get/consulting-staff?page=${page}&id=${id}`;
    } else if (user.userAuth.roleid === 5) {
      url = `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/api/process-request/get/customer?page=${page}&id=${id}`;
    }
    axios.get(url).then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        Promise.all(
          response.data.content.map(async (item) => {
            await checkValuationRequestFinished(item.id, setIsChecked);
            await checkValuationRequestSealed(item.id, setIsChecked);
          })
        );

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
  const checkValuationRequestFinished = async (
    processRequestId,
    setIsChecked
  ) => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/process-request/check-finished?id=${processRequestId}`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          if (response.data === "Finished request") {
            setIsChecked(true);
            toast({
              title: "Success",
              description:
                "Valuation request finished. Please contact customer to receive diamond.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  const checkValuationRequestSealed = async (
    processRequestId,
    setIsChecked
  ) => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/process-request/check-sealed?id=${processRequestId}`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          if (response.data === "Sealed request") {
            setIsChecked(true);
            toast({
              title: "Success",
              description:
                "Valuation request sealed. Please contact customer to receive diamond.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  useEffect(() => {
    fetchProcessRequest(currentPage, user.userAuth.id);
  }, []);
  useEffect(() => {
    if (isChecked) {
      fetchProcessRequest(currentPage, user.userAuth.id);
      setIsChecked(false);
    }
  }, [isChecked]);
  const fetchValuationRequest = (pendingRequestId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-request/pending-request/get?id=${pendingRequestId}`
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setSelectedValuationRequest(response.data);
        }
      });
  };
  const fetchValuationResult = (valuationRequestId) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/valuation-result/valuation-request/get?id=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        setSelectedValuationResult(response.data);
      });
  };
  const createSealingLetter = (valuationRequestId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/sealing-letter/create?valuationRequestId=${valuationRequestId}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.includes("successful")) {
            toast({
              title: "Success",
              description: response.data,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }else if(response.data.includes("already exists")){
            toast({
              title: "Failed",
              description: response.data,
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      });
  };
  return (
    <>
      {processRequest.length === 0 ? (
        <>No request to show</>
      ) : (
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
                        viewValuationRequest.onOpen();
                        fetchValuationRequest(item?.pendingRequestId);
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <PageIndicator totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <Modal
        isOpen={viewValuationRequest.isOpen}
        onClose={viewValuationRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
            Valuation Request ID: {selectedProcessRequest?.id || "N/A"}
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} gap={5}>
              {(user.userAuth.roleid === 2 || user.userAuth.roleid === 3) && (
                <>
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
                </>
              )}
              {(user.userAuth.roleid === 2 || user.userAuth.roleid === 5) && (
                <>
                  <Text>
                    <strong>Staff Name</strong>:{" "}
                    {selectedProcessRequest?.consultingStaffName || "N/A"}
                  </Text>
                  <Text>
                    <strong>Staff Email</strong>:{" "}
                    {selectedProcessRequest?.consultingStaffEmail || "N/A"}
                  </Text>
                  <Text>
                    <strong>Staff Phone</strong>:{" "}
                    {selectedProcessRequest?.consultingStaffPhone || "N/A"}
                  </Text>
                </>
              )}
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
          {(user.userAuth.roleid === 2 && (
            <ModalFooter justifyContent={"space-around"}>
              {selectedProcessRequest?.status === "Sealed" && (
                <Button
                  onClick={() => {
                    createSealingLetter(selectedValuationRequest?.id);
                  }}
                >
                  Create sealing letter
                </Button>
              )}
            </ModalFooter>
          )) ||
            (user.userAuth.roleid === 3 && (
              <ModalFooter justifyContent={"space-around"}>
                {(selectedProcessRequest?.status === "Not resolved yet" && (
                  <>
                    <Button
                      onClick={() => {
                        viewValuationRequest.onClose();
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
                          viewValuationRequest.onClose();
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
                  )) ||
                  (selectedProcessRequest?.status === "Diamond Received" && (
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  )) ||
                  (selectedProcessRequest?.status === "Valuated" && (
                    <>
                      <Button
                        colorScheme="teal"
                        onClick={() => {
                          fetchValuationResult(selectedValuationRequest?.id);
                          viewValuationResult.onOpen();
                        }}
                      >
                        View
                      </Button>
                      <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                    </>
                  )) ||
                  (selectedProcessRequest?.status === "Finished" && (
                    <>
                      <SimpleGrid columns={2} spacing={5}>
                        <Button
                          colorScheme="teal"
                          onClick={() => {
                            fetchValuationResult(selectedValuationRequest?.id);
                            viewValuationResult.onOpen();
                          }}
                        >
                          View
                        </Button>
                        <ZaloChat
                          phone={selectedProcessRequest?.customerPhone}
                        />
                        <Button
                          colorScheme="blue"
                          onClick={() => {
                            updateProcessRequest(
                              selectedProcessRequest?.id,
                              "Done"
                            );
                          }}
                        >
                          Cust. Received
                        </Button>
                        <Button colorScheme="red">Lost Receipt</Button>
                      </SimpleGrid>
                    </>
                  )) ||
                  (selectedProcessRequest?.status === "Done" && (
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  )) ||
                  (selectedProcessRequest?.status === "Sealed" && (
                    <ZaloChat phone={selectedProcessRequest?.customerPhone} />
                  ))}
              </ModalFooter>
            )) ||
            (user.userAuth.roleid === 5 && (
              <ModalFooter justifyContent={"space-around"}>
                {(selectedProcessRequest?.status === "Not resolved yet" && (
                  <ZaloChat
                    phone={selectedProcessRequest?.consultingStaffPhone}
                  />
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
                  )) ||
                  ((selectedProcessRequest?.status === "Valuated" ||
                    selectedProcessRequest?.status === "Finished") && (
                    <>
                      <Button
                        colorScheme="teal"
                        onClick={() => {
                          viewValuationResult.onOpen();
                          fetchValuationResult(selectedValuationRequest?.id);
                        }}
                      >
                        View Result
                      </Button>
                      <ZaloChat
                        phone={selectedProcessRequest?.consultingStaffPhone}
                      />
                    </>
                  ))}
              </ModalFooter>
            ))}
        </ModalContent>
      </Modal>
      {(user.userAuth.roleid === 3 && (
        <Modal
          isOpen={viewValuationResult.isOpen}
          onClose={viewValuationResult.onClose}
          size={"full"}
        >
          <ModalOverlay />
          <ModalContent ref={valuationResultRef} p={5}>
            <ModalHeader>
              <Flex direction={"row"} gap={5}>
                <Icon as={GiDiamondTrophy} w={16} h={16} />
                <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                  DiamondVal
                </Text>
              </Flex>
            </ModalHeader>
            <ModalBody>
              <Flex direction={"column"} gap={2} p={5}>
                <Flex direction={"column"} gap={5} align={"center"}>
                  <Text fontSize={"2xl"}>
                    <strong>Valuation Result ID</strong>:{" "}
                    {selectedValuationResult?.id || "N/A"}
                  </Text>
                </Flex>
                <SimpleGrid columns={2} spacing={10}>
                  <Flex direction={"column"} gap={5} bg={"blue.100"} p={5}>
                    <Text bg={"blue.400"} p={2}>
                      Grading Report
                    </Text>
                    <Text>
                      <strong>ID</strong>: {selectedValuationResult?.id}
                    </Text>
                    <Text>
                      <strong>Valuated Date</strong>:{" "}
                      {selectedValuationResult?.createdDate?.slice(0, 10)}
                    </Text>
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Origin"
                    ) && (
                      <Text>
                        <strong>Origin: </strong>
                        {selectedValuationResult?.origin}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Shape"
                    ) && (
                      <Text>
                        <strong>Shape: </strong>
                        {selectedValuationResult?.shape}
                      </Text>
                    )}
                    <Text>
                      <strong>Price: </strong>
                      {selectedValuationResult?.price}
                    </Text>
                    <Text bg={"blue.400"} p={2}>
                      4C Grading Result
                    </Text>
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Carat"
                    ) && (
                      <Text>
                        <strong>Carat: </strong>
                        {selectedValuationResult?.carat}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Color"
                    ) && (
                      <Text>
                        <strong>Color: </strong>
                        {selectedValuationResult?.color}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Cut"
                    ) && (
                      <Text>
                        <strong>Cut: </strong>
                        {selectedValuationResult?.cut}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Clarity"
                    ) && (
                      <Text>
                        <strong>Clarity: </strong>
                        {selectedValuationResult?.clarity}
                      </Text>
                    )}
                  </Flex>
                  <Flex direction={"column"} gap={5} bg={"blue.100"} p={5}>
                    <Text bg={"blue.400"} p={2}>
                      Additional Grading Information
                    </Text>
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Symmetry"
                    ) && (
                      <Text>
                        <strong>Symmetry: </strong>
                        {selectedValuationResult?.symmetry}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Polish"
                    ) && (
                      <Text>
                        <strong>Polish: </strong>
                        {selectedValuationResult?.polish}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Fluorescence"
                    ) && (
                      <Text>
                        <strong>Fluorescence: </strong>
                        {selectedValuationResult?.fluorescence}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Measurements"
                    ) && (
                      <Text>
                        <strong>Measurements: </strong>
                        {selectedValuationResult?.measurements}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Table"
                    ) && (
                      <Text>
                        <strong>Table: </strong>
                        {selectedValuationResult?.diamondTable}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "Depth"
                    ) && (
                      <Text>
                        <strong>Depth: </strong>
                        {selectedValuationResult?.depth}
                      </Text>
                    )}
                    {selectedValuationResult?.serviceStatistic?.includes(
                      "L/W Ratio"
                    ) && (
                      <Text>
                        <strong>L/W Ratio: </strong>
                        {selectedValuationResult?.lengthToWidthRatio}
                      </Text>
                    )}
                  </Flex>
                </SimpleGrid>
              </Flex>
            </ModalBody>
            <ModalFooter justifyContent={"space-around"}>
              <Button onClick={handlePrintValuationResult}>Print</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )) ||
        (user.userAuth.roleid === 5 && (
          <Modal
            isOpen={viewValuationResult.isOpen}
            onClose={viewValuationResult.onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton />
                Valuation Result ID: {selectedValuationResult?.id}
              </ModalHeader>
              <ModalBody>
                <Flex direction={"column"} gap={5} p={5}>
                  <Text>
                    <strong>ID</strong>: {selectedValuationResult?.id}
                  </Text>
                  <Text>
                    <strong>Valuated Date</strong>:{" "}
                    {selectedValuationResult?.createdDate?.slice(0, 10)}
                  </Text>
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Origin"
                  ) && (
                    <Text>
                      <strong>Origin: </strong>
                      {selectedValuationResult?.origin}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Shape"
                  ) && (
                    <Text>
                      <strong>Shape: </strong>
                      {selectedValuationResult?.shape}
                    </Text>
                  )}
                  <Text>
                    <strong>Price: </strong>
                    {selectedValuationResult?.price}
                  </Text>
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Carat"
                  ) && (
                    <Text>
                      <strong>Carat: </strong>
                      {selectedValuationResult?.carat}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Color"
                  ) && (
                    <Text>
                      <strong>Color: </strong>
                      {selectedValuationResult?.color}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Cut"
                  ) && (
                    <Text>
                      <strong>Cut: </strong>
                      {selectedValuationResult?.cut}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Clarity"
                  ) && (
                    <Text>
                      <strong>Clarity: </strong>
                      {selectedValuationResult?.clarity}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Symmetry"
                  ) && (
                    <Text>
                      <strong>Symmetry: </strong>
                      {selectedValuationResult?.symmetry}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Polish"
                  ) && (
                    <Text>
                      <strong>Polish: </strong>
                      {selectedValuationResult?.polish}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Fluorescence"
                  ) && (
                    <Text>
                      <strong>Fluorescence: </strong>
                      {selectedValuationResult?.fluorescence}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Measurements"
                  ) && (
                    <Text>
                      <strong>Measurements: </strong>
                      {selectedValuationResult?.measurements}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Table"
                  ) && (
                    <Text>
                      <strong>Table: </strong>
                      {selectedValuationResult?.diamondTable}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "Depth"
                  ) && (
                    <Text>
                      <strong>Depth: </strong>
                      {selectedValuationResult?.depth}
                    </Text>
                  )}
                  {selectedValuationResult?.serviceStatistic?.includes(
                    "L/W Ratio"
                  ) && (
                    <Text>
                      <strong>L/W Ratio: </strong>
                      {selectedValuationResult?.lengthToWidthRatio}
                    </Text>
                  )}
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        ))}
    </>
  );
}
