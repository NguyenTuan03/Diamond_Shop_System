import React, { useEffect, useState } from "react";
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Box,
    Grid,
    GridItem,
    Flex,
    Image,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button
} from "@chakra-ui/react";
import { labGrownDiamond } from "../../../service/Price";
const tabs = [
    {
        shape: "Round",
        api: "round",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_round.svg?height=32&width=32"
    },
    {
        shape: "Oval",
        api: "oval",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_oval.svg?height=32&width=32"
    },
    {
        shape: "Princess",
        api: "princess",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_princess.svg?height=32&width=32"
    },
    {
        shape: "Emerald",
        api: "emerald",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_emerald.svg?height=32&width=32"
    },
    {
        shape: "Cushion",
        api: "cushion",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_cushion.svg?height=32&width=32"
    },
    {
        shape: "Radiant",
        api: "radiant",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_radiant.svg?height=32&width=32"
    },
    {
        shape: "Pear",
        api: "pear",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_pear.svg?height=32&width=32"
    },
    {
        shape: "Heart",
        api: "heart",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_heart.svg?height=32&width=32"
    },
    {
        shape: "Marquise",
        api: "marquise",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_marquise.svg?height=32&width=32"
    },
    {
        shape: "Asscher",
        api: "asscher",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_asscher.svg?height=32&width=32"
    },
]
export default function LabGrown() {
    const [price, setPrice] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await labGrownDiamond("");
                setPrice(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const shape = tabs[selectedTab].api;
                const result = await labGrownDiamond(shape);
                setPrice(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [selectedTab]);    
    return (
        <Tabs variant="unstyled" onChange={(index) => setSelectedTab(index)}>
            <TabList justifyContent={"center"}>
                {
                    tabs && (
                        tabs.map((tab, i) =>{
                            return (
                                <Tab
                                    key={i}
                                    _selected={{
                                        color: "black",
                                        bg: "rgb(224 231 255)",
                                        border: 0,
                                    }}
                                >
                                    <Flex flexDirection={"column"} alignItems={"center"}>
                                        <Image src={tab.img} w={"32px"} h={"32px"}/>
                                        {tab.shape}
                                    </Flex>
                                </Tab>
                            )
                        })
                    )
                }
            </TabList>
            <TabPanels>
            {tabs.map((tab, index) => (
                    <TabPanel key={index}>
                        <Box ml={5}>In the past month</Box>
                        <Text fontSize={"18px"} ml={5} my={4} fontWeight={"bold"}>
                            Diamond prices are down -2,31%
                        </Text>
                        <Grid templateColumns="repeat(4, 1fr)" gap={4} mx={5}>
                            {price.slice(0, 4).map((priceItem, index) => (
                                <GridItem key={index} w="100%" bg="#fff">
                                    <Box>
                                        <Flex pt={3} justifyContent={"space-between"}>
                                            <div>
                                                <Text
                                                    fontWeight={"bold"}
                                                    fontSize={"15px"}
                                                    ml={3}
                                                >
                                                    {priceItem.name}
                                                </Text>
                                                <Text ml={3} fontSize={"12px"}>
                                                    {priceItem.priceChange} (1m)
                                                </Text>
                                            </div>
                                            <div>
                                                <Text mr={3}>{priceItem.price}</Text>
                                                <Text mr={3}>$1,77</Text>
                                            </div>
                                        </Flex>
                                        <Flex>
                                            <Image src={priceItem.imageUrl} alt="Price Image" />
                                        </Flex>
                                        <Flex pt={3} justifyContent={"space-between"}>
                                            <div>
                                                <Text
                                                    fontWeight={"bold"}
                                                    fontSize={"15px"}
                                                    ml={3}
                                                >
                                                    Weight
                                                </Text>
                                                <Text ml={3} fontSize={"12px"}>
                                                    {priceItem.weight}
                                                </Text>
                                            </div>
                                            <div>
                                                <Text mr={3}>Inventory</Text>
                                                <Text mr={3}>{priceItem.inventory}</Text>
                                            </div>
                                            <div>
                                                <Text mr={3}>Inv. Change</Text>
                                                <Text mr={3}>↑ {priceItem.inventoryChange}</Text>
                                            </div>
                                        </Flex>
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>
                        <TableContainer mt={"80px"}>
                            <Text fontWeight={"bold"}>Explore Diamond Price</Text>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th>Price index</Th>
                                        <Th>Chart</Th>
                                        <Th>Price (USD)</Th>
                                        <Th>% Change (1m)</Th>
                                        <Th>Range (1m)</Th>
                                        <Th>Inventory</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {price.slice(4).map((priceItem, i) => (
                                        <Tr key={i}>
                                            <Td>{priceItem.priceIndex}</Td>
                                            <Td>
                                                <Image src={priceItem.chart} />
                                            </Td>
                                            <Td>{priceItem.priceUsd}</Td>
                                            <Td>{priceItem.priceChange}</Td>
                                            <Td>{priceItem.range}</Td>
                                            <Td>{priceItem.inv}</Td>
                                            <Td>
                                                <Button colorScheme="blue">View price charts</Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
}
