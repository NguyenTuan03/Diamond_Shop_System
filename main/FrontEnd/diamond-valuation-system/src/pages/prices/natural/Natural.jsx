import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Container,
    Box,
    Grid,
    GridItem,
    Flex,
    Spacer,
    Image,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Natural() {
    const [htmlContent, setHtmlContent] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8081/api/account/scrape") // Gọi API của Spring Boot
            .then((response) => {
                setHtmlContent(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <Tabs variant="unstyled">
            <TabList justifyContent={"center"}>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Round
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Oval
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Princess
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Emerald
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Cushion
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Radiant
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Pear
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Heart
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Marquise
                </Tab>
                <Tab
                    _selected={{
                        color: "black",
                        bg: "rgb(224 231 255)",
                        border: 0,
                    }}
                >
                    Asscher
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Box ml={5}>In the past month</Box>
                    <Text fontSize={"18px"} ml={5} my={4} fontWeight={"bold"}>
                        Diamond prices are down -2,31%
                    </Text>
                    <Grid templateColumns="repeat(4, 1fr)" gap={4} mx={5}>
                        <GridItem w="100%" bg="#fff">
                            <Box>
                                <Flex pt={3} justifyContent={"space-between"}>
                                    <div>
                                        <Text
                                            fontWeight={"bold"}
                                            fontSize={"15px"}
                                            ml={3}
                                        >
                                            0.5 Carat Diamond Prices
                                        </Text>
                                        <Text ml={3} fontSize={"12px"}>
                                            -2,49% (1m)
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>$1,77</Text>
                                        <Text mr={3}>$1,77</Text>
                                    </div>
                                </Flex>
                                <Flex>
                                    <Image
                                        src="https://stonealgo.blob.core.windows.net/img-q4m8c3hsmq/1m_All_0.5_carat.svg"
                                        alt="Dan Abramov"
                                    />
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
                                            0.5 ct.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inventory</Text>
                                        <Text mr={3}>150K</Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inv. Change</Text>
                                        <Text mr={3}>↑ 2.35k</Text>
                                    </div>
                                </Flex>
                            </Box>
                        </GridItem>
                        <GridItem w="100%" bg="#fff">
                            <Box>
                                <Flex pt={3} justifyContent={"space-between"}>
                                    <div>
                                        <Text
                                            fontWeight={"bold"}
                                            fontSize={"15px"}
                                            ml={3}
                                        >
                                            0.5 Carat Diamond Prices
                                        </Text>
                                        <Text ml={3} fontSize={"12px"}>
                                            -2,49% (1m)
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>$1,77</Text>
                                        <Text mr={3}>$1,77</Text>
                                    </div>
                                </Flex>
                                <Flex>
                                    <Image
                                        src="https://stonealgo.blob.core.windows.net/img-q4m8c3hsmq/1m_All_0.5_carat.svg"
                                        alt="Dan Abramov"
                                    />
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
                                            0.5 ct.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inventory</Text>
                                        <Text mr={3}>150K</Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inv. Change</Text>
                                        <Text mr={3}>↑ 2.35k</Text>
                                    </div>
                                </Flex>
                            </Box>
                        </GridItem>
                        <GridItem w="100%" bg="#fff">
                            <Box>
                                <Flex pt={3} justifyContent={"space-between"}>
                                    <div>
                                        <Text
                                            fontWeight={"bold"}
                                            fontSize={"15px"}
                                            ml={3}
                                        >
                                            0.5 Carat Diamond Prices
                                        </Text>
                                        <Text ml={3} fontSize={"12px"}>
                                            -2,49% (1m)
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>$1,77</Text>
                                        <Text mr={3}>$1,77</Text>
                                    </div>
                                </Flex>
                                <Flex>
                                    <Image
                                        src="https://stonealgo.blob.core.windows.net/img-q4m8c3hsmq/1m_All_0.5_carat.svg"
                                        alt="Dan Abramov"
                                    />
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
                                            0.5 ct.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inventory</Text>
                                        <Text mr={3}>150K</Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inv. Change</Text>
                                        <Text mr={3}>↑ 2.35k</Text>
                                    </div>
                                </Flex>
                            </Box>
                        </GridItem>
                        <GridItem w="100%" bg="#fff">
                            <Box>
                                <Flex pt={3} justifyContent={"space-between"}>
                                    <div>
                                        <Text
                                            fontWeight={"bold"}
                                            fontSize={"15px"}
                                            ml={3}
                                        >
                                            0.5 Carat Diamond Prices
                                        </Text>
                                        <Text ml={3} fontSize={"12px"}>
                                            -2,49% (1m)
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>$1,77</Text>
                                        <Text mr={3}>$1,77</Text>
                                    </div>
                                </Flex>
                                <Flex>
                                    <Image
                                        src="https://stonealgo.blob.core.windows.net/img-q4m8c3hsmq/1m_All_0.5_carat.svg"
                                        alt="Dan Abramov"
                                    />
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
                                            0.5 ct.
                                        </Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inventory</Text>
                                        <Text mr={3}>150K</Text>
                                    </div>
                                    <div>
                                        <Text mr={3}>Inv. Change</Text>
                                        <Text mr={3}>↑ 2.35k</Text>
                                    </div>
                                </Flex>
                            </Box>
                        </GridItem>
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Box>
                        <div
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
