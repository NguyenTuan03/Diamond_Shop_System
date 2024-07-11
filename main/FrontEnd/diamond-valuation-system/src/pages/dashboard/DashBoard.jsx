import { IoIosCreate } from "react-icons/io";
import {
  Box,
  Button,
  StackDivider,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardHeader,
  Flex,
  CardBody,
  Center,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { viewCustomerRequest } from "../../service/ViewRequest";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import axios from "axios";
import { PiPiggyBankBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import LazyLoad from "../../components/lazyload/LazyLoad";
export default function DashBoardAppoint() {
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const [request, SetRequest] = useState([]);
  const [income, setIncome] = useState(null);
  const [doneRequest, setDoneRequest] = useState(null);
  const [valuatedDiamond, setValuatedDiamond] = useState(null);
  const fetchTotalIncome = async () => {
    await axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/payment/income`)
      .then((res) => {
        setIncome(res.data);
      });
  };
  const fetchTotalDoneRequest = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/total/done`
      )
      .then((res) => {
        setDoneRequest(res.data);
      });
  };
  const fetchTotalValuatedDiamond = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/valuation-result/total`
      )
      .then((res) => {
        setValuatedDiamond(res.data);
      });
  };
  useEffect(() => {
    if (isUsers && user.userAuth.authorities[0].authority === "Customer") {
      const fetchApi = async (id) => {
        try {
          const result = await viewCustomerRequest(1, id);
          SetRequest(result.content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchApi(user.userAuth.id);
    } else {
      fetchTotalIncome();
      fetchTotalDoneRequest();
      fetchTotalValuatedDiamond();
    }
  }, []);
  return (
    <>
      {isUsers && user.userAuth.authorities[0].authority === "Customer" ? (
        <Box>
          <Box
            bg="gray.600"
            color="white"
            mb={5}
            boxShadow="sm"
            borderRadius="md"
            maxW="100%"
            minW="100%"
          >
            <Text py={3} fontSize="lg" pl={4}>
              APPOINTMENTS
            </Text>
            {request.length === 0 ? (
              <Box>There's no API available</Box>
            ) : (
              <TableContainer>
                <Table variant="simple" bg="gray.200" color="black">
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Customer</Th>
                      <Th>Date</Th>
                      <Th>Email</Th>
                      <Th>Phone</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {request.map((req, i) => {
                      return (
                        <Tr key={i}>
                          <Td>{i + 1}</Td>
                          <Td>{req.customerName}</Td>
                          <Td>{req.createdDate?.slice(0, 10)}</Td>
                          <Td>{req.customerEmail}</Td>
                          <Td>{req.customerPhone}</Td>
                          <Td>{req.description}</Td>
                          <Td>Contacting...</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </Box>
          <Box
            bg="gray.600"
            color="white"
            mb={5}
            boxShadow="sm"
            borderRadius="md"
            maxW="100%"
            minW="100%"
          >
            <Text py={3} fontSize="lg" pl={4}>
              Transaction History
            </Text>
            <Box overflowX="auto">
              <Table variant="simple" bg="gray.200" color="black">
                <Thead>
                  <Tr>
                    <Th>Services</Th>
                    <Th>Date</Th>
                    <Th>Invoice ID</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <HStack>
                        <Box>
                          <Text>Check Diamond</Text>
                          <Text fontSize="sm" color="gray.500">
                            ID: 25014287
                          </Text>
                        </Box>
                      </HStack>
                    </Td>
                    <Td>
                      <Text>21 March 2021</Text>
                      <Text fontSize="sm" color="gray.500">
                        At 6:45 PM
                      </Text>
                    </Td>
                    <Td>OP01214784</Td>
                    <Td>$250 USD</Td>
                    <Td color="green">Receive</Td>
                    <Td>
                      <Button size="sm" bg="gray.300">
                        Details
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box
              bg="gray.600"
              color="white"
              borderRadius="md"
              maxW="100%"
              minW="100%"
            >
              <Text py={3} fontSize="lg" pl={4}>
                SAVED DIAMONDS
              </Text>
              <VStack
                background="rgb(239 246 255)"
                divider={<StackDivider borderColor="gray.200" />}
                spacing={1}
                align="stretch"
                justifyContent="center"
                px={4}
                py={2}
              >
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
              </VStack>
            </Box>

            <Box
              bg="gray.600"
              color="white"
              borderRadius="md"
              maxW="100%"
              minW="100%"
            >
              <Text py={3} fontSize="lg" pl={4}>
                RECENT DIAMONDS
              </Text>
              <VStack
                background="rgb(239 246 255)"
                divider={<StackDivider borderColor="gray.200" />}
                spacing={2}
                align="stretch"
                justifyContent="center"
                px={4}
                py={2}
              >
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
                <HStack spacing={4} align="center">
                  <Image
                    boxSize="50px"
                    src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                    alt="Diamond 1"
                    borderRadius="full"
                  />
                  <Box>
                    <Text color="blue.600">Round · 0.33 Carat · J Color</Text>
                    <Text color="blue.600">VS1 Clarity · None Fluor</Text>
                    <Text color="#222">GIA 2486742135</Text>
                  </Box>
                  <Button size="sm" bg="gray.300" ml="auto">
                    View
                  </Button>
                </HStack>
              </VStack>
              <Button
                backgroundColor="white"
                size="sm"
                border="1px solid"
                borderColor="grey"
                ml="auto"
                mt={1}
                mb={1}
                display="flex"
              >
                View All
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      ) : (
        <>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            <Card border={"md"} shadow={"md"}>
              <CardHeader>
                <Flex align={"center"} gap={15}>
                  <PiPiggyBankBold size={30} />
                  <Text fontSize={"2xl"}>INCOME</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center gap={2}>
                  <Text fontSize={"5xl"}>{income}</Text>vnd
                </Center>
              </CardBody>
            </Card>
            <Card border={"md"} shadow={"md"}>
              <CardHeader>
                <Flex align={"center"} gap={15}>
                  <MdDone size={30} style={{ background: "green" }} />
                  <Text fontSize={"2xl"}>DONE REQUEST</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center gap={2}>
                  <Text fontSize={"5xl"}>{doneRequest}</Text>
                </Center>
              </CardBody>
            </Card>
            <Card border={"md"} shadow={"md"}>
              <CardHeader>
                <Flex align={"center"} gap={15}>
                  <IoDiamond size={30} />
                  <Text fontSize={"2xl"}>VALUATED DIAMOND</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center gap={2}>
                  <Text fontSize={"5xl"}>{valuatedDiamond}</Text>
                </Center>
              </CardBody>
            </Card>
          </SimpleGrid>
        </>
      )}
    </>
  );
}
