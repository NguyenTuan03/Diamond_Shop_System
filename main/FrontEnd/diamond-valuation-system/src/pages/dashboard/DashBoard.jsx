import { IoIosCreate } from "react-icons/io";
import {
    Box, Button, StackDivider, Text, VStack, HStack, Image, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td, 
    TableContainer
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { viewCustomerRequest } from "../../service/ViewRequest";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import DashBoardTransaction from "./DashBoardTransaction";
export default function DashBoardAppoint() {
    const user = useContext(UserContext);
    const [request, SetRequest] = useState([]);
    useEffect(() => {
        const fetchApi = async (id) => {
            try {
                const result = await viewCustomerRequest(1, id);
                SetRequest(result.content);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi(user.userAuth.id);
    }, []);
    return (
        <Box>
            <Box  bg="gray.600" color="white" mb={5} boxShadow="sm" borderRadius="md" maxW="100%" minW="100%">
            <Text py={3} fontSize="lg" pl={4}>
                APPOINTMENTS
            </Text>
            {request.length === 0 ? (
                <Box ml={"12px"}>There's no upcoming appointment</Box>
            ) : (
                <TableContainer>
                    <Table variant="simple" bg="gray.200" color="black">
                        <Thead >
                            <Tr >
                                <Th color="black">No</Th>
                                <Th color="black">Name</Th>
                                <Th color="black">Date Create Request</Th>
                                
                                <Th color="black">Description</Th>
                                <Th color="black">Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {request.map((req, i) => {
                                return (
                                    <Tr key={i}>
                                        <Td>{i + 1}</Td>
                                        <Td>{req.customerName}</Td>
                                        <Td>{req.createdDate?.slice(0, 10)}</Td>
                                        
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
        <DashBoardTransaction/>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box bg="gray.600" color="white" borderRadius="md" maxW="100%" minW="100%">
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

                <Box bg="gray.600" color="white" borderRadius="md" maxW="100%" minW="100%">
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
        
    );
}

