import { Box, Button, StackDivider, Text, VStack, HStack, Image, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { viewCustomerRequest } from "../../service/ViewRequest";
import { UserContext } from "../../components/GlobalContext/AuthContext";

export default function DashBoard() {
    const user = useContext(UserContext);
    const [appointments, setAppointments] = useState([]);
    const [savedDiamonds, setSavedDiamonds] = useState([]);
    const [priceAlerts, setPriceAlerts] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await viewCustomerRequest(id);
            setAppointments(result.appointments || []);
            setSavedDiamonds(result.savedDiamonds || []);
            setPriceAlerts(result.priceAlerts || []);
            setTransactions(result.transactions || []);
        };
        fetchApi(user.userAuth.id);
    }, [user.userAuth.id]);

    return (
        <Box>
            <Box Box bg=" gray.800" w="100%" pl={1} color="white" mb={5}>
            <Text py={3} fontSize="lg" pl={"20px"}>
                        APPOINTMENTS
                    </Text>
                    <VStack
                        pl={4}
                        background="rgb(239 246 255)"
                        divider={<StackDivider borderColor="gray.200" />}
                        spacing={1}
                        align="stretch"
                        justifyContent="center"
                    >
                        {appointments.length === 0 ? (
                            <Box lineHeight="40px" h="40px" color="#000">
                                No Appointments
                            </Box>
                        ) : (
                            appointments.map((appointment, index) => (
                                <Box key={index} lineHeight="40px" h="40px" color="#000">
                                    {appointment.details}
                                </Box>
                            ))
                        )}
                    </VStack>
                </Box>
                <Box Box bg="gray.800" w="100%" pl={1} color="black" mb={5} boxShadow="sm" borderRadius="md">
                <Text bg="gray.800" w="100%" py={3} fontSize="lg" pl={"20px"}  color="white" borderBottom="1px solid" borderColor="gray.200">
                    Transaction History
                </Text>
                <Box overflowX="auto">
                    <Table variant="simple" bg="gray.200">
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
                            
                                <Tr >
                                    <Td>
                                        <HStack >
                                            
                                            <Box>
                                                <Text  >Check Diamond</Text>
                                                <Text fontSize="sm" color="gray.500">ID: 25014287</Text>
                                            </Box>
                                        </HStack>
                                    </Td>
                                    <Td>
                                        <Text  >21 March 2021</Text>
                                        <Text fontSize="sm" color="gray.500">At 6:45 PM</Text>
                                    </Td>
                                    <Td>OP01214784</Td>
                                    <Td  >$250 USD</Td>
                                    <Td color="green" >Receive</Td>
                                    <Td>
                                        <Button size="sm" bg="gray.300">Details</Button>
                                    </Td>
                                </Tr>
                            
                        </Tbody>
                    </Table>
                </Box>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box Box bg=" gray.800" w="100%" pl={1} color="white">
                    <Text py={3} fontSize="lg" pl={"20px"}>
                        SAVED DIAMONDS
                    </Text>
                    <VStack
                        pl={4}
                        background={"rgb(239 246 255)"}
                        divider={<StackDivider borderColor="gray.200" />}
                        spacing={1}
                        align="stretch"
                        justifyContent={"center"}
                    >
                        {savedDiamonds.length === 0 ? (
                            <Box lineHeight={"40px"} h="40px" color={"#000"}>
                                No Saved Diamonds
                            </Box>
                        ) : (
                            savedDiamonds.map((diamond, index) => (
                                <Box key={index} lineHeight="40px" h="40px" color="#000">
                                    {diamond.details}
                                </Box>
                            ))
                        )}
                    </VStack>
                </Box>
                <Box bg=" gray.800" w="100%" pl={1} color="white">
                <Text py={3} fontSize="lg" pl={"20px"}>
                    RECENT DIAMONDS
                </Text>
                <VStack
                    pl={4}
                    background="rgb(239 246 255)"
                    divider={<StackDivider borderColor="gray.300" />}
                    spacing={1}
                    align="stretch"
                    justifyContent="center"
                >
                    <HStack spacing={4} py={2} align="center">
                        <Image
                            boxSize="50px"
                            src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                            alt="Diamond 1"
                            borderRadius="full"
                        />
                        <Box>
                            <Text   color="blue.600">Round · 0.33 Carat · J Color</Text>
                            <Text   color="blue.600">VS1 Clarity · None Fluor</Text>
                            <Text   color="#222">GIA 2486742135</Text>
                        </Box>
                        <Button bg="gray.300" size="sm" ml="auto">View</Button>
                    </HStack>
                    <HStack spacing={4} py={2} align="center">
                        <Image
                            boxSize="50px"
                            src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                            alt="Diamond 2"
                            borderRadius="full"
                        />
                        <Box>
                            <Text   color="blue.600">Princess · 0.32 Carat · G Color</Text>
                            <Text   color="blue.600">VS2 Clarity · None Fluor</Text>
                            <Text   color="#222">GIA 2487868429</Text>
                        </Box>
                        <Button bg="gray.300" size="sm" ml="auto">View</Button>
                    </HStack>
                    <HStack spacing={4} py={2} align="center">
                        <Image
                            boxSize="50px"
                            src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                            alt="Diamond 3"
                            borderRadius="full"
                        />
                        <Box>
                            <Text   color="blue.600">Round · 0.33 Carat · I Color</Text>
                            <Text   color="blue.600">VS2 Clarity · None Fluor</Text>
                            <Text   color="#222">GIA 6481087541</Text>
                        </Box>
                        <Button bg="gray.300" size="sm" ml="auto">View</Button>
                    </HStack>
                    <HStack spacing={4} py={2} align="center">
                        <Image
                            boxSize="50px"
                            src="https://d3at7kzws0mw3g.cloudfront.net/images/diamond/240108-874.jpg"
                            alt="Diamond 4"
                            borderRadius="full"
                        />
                        <Box>
                            <Text   color="blue.600">Princess · 0.31 Carat · H Color</Text>
                            <Text   color="blue.600">VS2 Clarity · None Fluor</Text>
                            <Text   color="#222">GIA 6491064518</Text>
                        </Box>
                        <Button bg="gray.300" size="sm" ml="auto">View</Button>
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

            

            <Box Box bg=" gray.800" w="100%" pl={1} color="white" mt={5}>
            <Text py={3} fontSize="lg" pl={"20px"}>
                    PRICE ALERTS
                </Text>
                <VStack
                    pl={4}
                    background="rgb(239 246 255)"
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={1}
                    align="stretch"
                    justifyContent="center"
                >
                    {priceAlerts.length === 0 ? (
                        <Box lineHeight="40px" h="40px" color="#000">
                            No Price Alerts
                        </Box>
                    ) : (
                        priceAlerts.map((alert, index) => (
                            <Box key={index} lineHeight="40px" h="40px" color="#000">
                                {alert.details}
                            </Box>
                        ))
                    )}
                </VStack>
            </Box>
        </Box>
    );
}
