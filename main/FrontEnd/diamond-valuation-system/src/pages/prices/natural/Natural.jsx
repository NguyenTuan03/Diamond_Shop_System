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
    Button,
    UnorderedList,
    ListItem,
    Skeleton,
    SkeletonText,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { naturalDiamond } from "../../../service/Price";
import { RxExternalLink } from "react-icons/rx";
const tabs = [
    {
        shape: "Round",
        api: "round",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_round.svg?height=32&width=32",
    },
    {
        shape: "Oval",
        api: "oval",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_oval.svg?height=32&width=32",
    },
    {
        shape: "Princess",
        api: "princess",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_princess.svg?height=32&width=32",
    },
    {
        shape: "Emerald",
        api: "emerald",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_emerald.svg?height=32&width=32",
    },
    {
        shape: "Cushion",
        api: "cushion",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_cushion.svg?height=32&width=32",
    },
    {
        shape: "Radiant",
        api: "radiant",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_radiant.svg?height=32&width=32",
    },
    {
        shape: "Pear",
        api: "pear",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_pear.svg?height=32&width=32",
    },
    {
        shape: "Heart",
        api: "heart",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_heart.svg?height=32&width=32",
    },
    {
        shape: "Marquise",
        api: "marquise",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_marquise.svg?height=32&width=32",
    },
    {
        shape: "Asscher",
        api: "asscher",
        img: "https://stonealgo-3.b-cdn.net/static/dist/img/Shapes/svg/d_shape_asscher.svg?height=32&width=32",
    },
];
export default function Natural() {
    const [price, setPrice] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            try {
                const result = await naturalDiamond("");
                setPrice(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            try {
                const shape = tabs[selectedTab].api;
                const result = await naturalDiamond(shape);
                setPrice(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchApi();
    }, [selectedTab]);
    return (
        <Tabs variant="unstyled" onChange={(index) => setSelectedTab(index)}>
            <TabList justifyContent={"center"}>
                {tabs &&
                    tabs.map((tab, i) => {
                        return (
                            <Tab
                                key={i}
                                _selected={{
                                    color: "black",
                                    bg: "rgb(224 231 255)",
                                    border: 0,
                                }}
                            >
                                <Flex
                                    flexDirection={"column"}
                                    alignItems={"center"}
                                >
                                    <Image
                                        src={tab.img}
                                        w={"32px"}
                                        h={"32px"}
                                    />
                                    {tab.shape}
                                </Flex>
                            </Tab>
                        );
                    })}
            </TabList>
            <TabPanels>
                {tabs.map((tab, index) => (
                    <TabPanel key={index}>
                        <Box ml={5}>In the past month</Box>
                        <Text
                            fontSize={"18px"}
                            ml={5}
                            my={4}
                            fontWeight={"bold"}
                        >
                            Diamond prices are down -2,31%
                        </Text>
                        <Grid templateColumns="repeat(4, 1fr)" gap={4} mx={5}>
                            {isLoading
                                ? Array(4)
                                      .fill("")
                                      .map((_, index) => (
                                          <GridItem key={index} w="100%">
                                              <SkeletonText
                                                  noOfLines={4}
                                                  spacing="4"
                                                  skeletonHeight="2"
                                              />
                                          </GridItem>
                                      ))
                                : price.slice(0, 4).map((priceItem, index) => (
                                      <GridItem key={index} w="100%" bg="#fff">
                                          <Box>
                                              <Flex
                                                  pt={3}
                                                  justifyContent={
                                                      "space-between"
                                                  }
                                              >
                                                  <div>
                                                      <Text
                                                          fontWeight={"bold"}
                                                          fontSize={"15px"}
                                                          ml={3}
                                                      >
                                                          {priceItem.name}
                                                      </Text>
                                                      <Text
                                                          ml={3}
                                                          fontSize={"12px"}
                                                          color={
                                                              parseFloat(
                                                                  priceItem.priceChange
                                                              ) < 0
                                                                  ? "red"
                                                                  : "green"
                                                          }
                                                      >
                                                          {
                                                              priceItem.priceChange
                                                          }{" "}
                                                          (1m)
                                                      </Text>
                                                  </div>
                                                  <div>
                                                      <Text mr={3}>
                                                          {priceItem.price}
                                                      </Text>
                                                      <Text mr={3}><RxExternalLink color="blue"/></Text>
                                                  </div>
                                              </Flex>
                                              <Flex>
                                                  <Image
                                                      src={priceItem.imageUrl}
                                                      alt="Price Image"
                                                  />
                                              </Flex>
                                              <Flex
                                                  pt={3}
                                                  justifyContent={
                                                      "space-between"
                                                  }
                                              >
                                                  <div>
                                                      <Text
                                                          fontSize={"15px"}
                                                          ml={3}
                                                      >
                                                          Weight
                                                      </Text>
                                                      <Text ml={3}>
                                                          {priceItem.weight}
                                                      </Text>
                                                  </div>
                                                  <div>
                                                      <Text mr={3}>
                                                          Inventory
                                                      </Text>
                                                      <Text mr={3}>
                                                          {priceItem.inventory}
                                                      </Text>
                                                  </div>
                                                  <div>
                                                      <Text mr={3}>
                                                          Inv. Change
                                                      </Text>
                                                      <Text mr={3}>
                                                          ↑{" "}
                                                          {
                                                              priceItem.inventoryChange
                                                          }
                                                      </Text>
                                                  </div>
                                              </Flex>
                                          </Box>
                                      </GridItem>
                                  ))}
                        </Grid>
                        <TableContainer mt={"80px"}>
                            <Text fontWeight={"bold"}>
                                Explore Diamond Price
                            </Text>
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
                                    {isLoading
                                        ? Array(5)
                                              .fill("")
                                              .map((_, i) => (
                                                  <Tr key={i}>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                      <Td>
                                                          <Skeleton height="20px" />
                                                      </Td>
                                                  </Tr>
                                              ))
                                        : price.slice(4).map((priceItem, i) => (
                                              <Tr key={i}>
                                                  <Td>
                                                      {priceItem.priceIndex}
                                                  </Td>
                                                  <Td>
                                                      <Image
                                                          src={priceItem.chart}
                                                      />
                                                  </Td>
                                                  <Td>{priceItem.priceUsd}</Td>
                                                  <Td>
                                                      <Text
                                                          ml={3}
                                                          fontSize={"12px"}
                                                          color={
                                                              parseFloat(
                                                                  priceItem.change
                                                              ) < 0
                                                                  ? "red"
                                                                  : "green"
                                                          }
                                                      >
                                                          {
                                                              priceItem.change
                                                          }{" "}
                                                          (1m)
                                                      </Text>
                                                  </Td>
                                                  <Td>{priceItem.range}</Td>
                                                  <Td>{priceItem.inv}</Td>
                                                  <Td>
                                                      <Button colorScheme="blue">
                                                          View price charts
                                                      </Button>
                                                  </Td>
                                              </Tr>
                                          ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                ))}
            </TabPanels>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem w={"100%"}>
                    <Text>
                        <Text fontSize="4xl" fontWeight={"bold"} mb={"24px"}>
                            Diamond Prices
                        </Text>
                        <Text mb={"24px"}>
                            The price of diamonds changes daily. StoneAlgo
                            tracks daily diamond price data from a variety of
                            online jewelers to help our users better understand
                            how much a diamond costs today and how that price
                            stacks up to historical prices for the same type of
                            diamond. Here are some of the key features we offer
                            to help guide you on your diamond journey.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            Diamond Price History Charts
                        </Text>
                        <Text mb={"24px"}>
                            Diamond price charts show the price trend for a
                            specific diamond category over time. For instance,
                            if you click “1 carat diamond prices” you’ll see a
                            historical price chart and performance sourced from
                            diamond data in our extensive database for all
                            diamonds that match this carat weight. If you want
                            to get more specific and view all Round 1 Carat
                            diamonds, simply click on that link or use the
                            search to show data specific to those criteria.
                            Navigating these different categories (diamond
                            indices) can help you better understand diamond
                            valuation and price trends for diamonds with
                            different characteristics.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            Diamond Price List
                        </Text>
                        <Text mb={"24px"}>
                            Our diamond price list formats are an easy way to
                            compare price, performance, and popularity across
                            multiple diamond indices at a glance. We'd recommend
                            drilling down into more specific diamond indices
                            where you can see pricing information and trends for
                            specific diamonds on the market as well as
                            comparisons to other popular indices (e.g. S&P 500,
                            Gold prices). This will also allow you to search the
                            best available diamonds on our platform that match
                            your search criteria. These diamond price lists give
                            you a quick snapshot but you can see even more
                            diamond options in our diamond search engine.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            Diamond Engagement Ring Guides
                        </Text>
                        <Text mb={"24px"}>
                            For even more in-depth advice on how to pick out the
                            perfect diamond, regardless of shape, engagement
                            ring setting style, or earring style, check out our
                            most popular diamond pricing guides
                        </Text>
                        <UnorderedList>
                            <ListItem textDecoration={"underline"} mb={"12px"}>
                                1 Carat Diamond Ring Guide
                            </ListItem>
                            <ListItem textDecoration={"underline"} mb={"12px"}>
                                1.5 Carat Diamond Ring Guide
                            </ListItem>
                            <ListItem textDecoration={"underline"} mb={"12px"}>
                                2 Carat Diamond Ring Guide
                            </ListItem>
                            <ListItem textDecoration={"underline"} mb={"12px"}>
                                2.5 Carat Diamond Ring Guide
                            </ListItem>
                            <ListItem textDecoration={"underline"} mb={"12px"}>
                                3 Carat Diamond Ring Guide
                            </ListItem>
                            <ListItem textDecoration={"underline"} mb={"12px"}>
                                4 Carat Diamond Ring Guide
                            </ListItem>
                        </UnorderedList>
                        <Text fontSize="4xl" fontWeight={"bold"} mb={"24px"}>
                            Frequently Asked Questions
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            How are diamonds priced?
                        </Text>
                        <Text mb={"24px"}>
                            Diamonds are priced by diamond dealers based on the
                            market for similar diamonds of the same shape,
                            color, clarity, and other key characteristics. Most
                            jewelry professionals discuss diamond prices in
                            terms of price per carat and then calculate the
                            diamonds final price by multiplying price-per-carat
                            by carat weight to solve the diamond’s final price.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            How much does a diamond cost?
                        </Text>
                        <Text mb={"24px"}>
                            Diamond prices vary significantly based on the
                            diamond’s shape, color, clarity, carat weight,
                            fluorescence, polish, symmetry, and other important
                            factors. For example, an expensive 1 carat D color
                            IF clarity diamond can cost over $20,000 while a 1
                            carat K color SI2 clarity diamond currently costs
                            closer to $2,500. Most shocking though is that many
                            people would have a hard time telling the difference
                            between these two diamonds, especially when they are
                            set in an engagement ring setting or diamond stud
                            earrings.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            How much are diamonds worth?
                        </Text>
                        <Text mb={"12px"}>
                            Diamonds are more valuable than just about any other
                            naturally occurring mineral based on weight,
                            particularly jewelry quality diamonds like those in
                            the colorless, near colorless, and faint colored
                            diamond color grade ranges. A gram of gold is
                            currently worth less than $100, while 1 gram of
                            diamond would equate to a 5 carat stone which could
                            be priced at over $400,000.
                        </Text>
                        <Text mb={"24px"}>
                            While they are expensive, diamonds are not
                            considered a good investment since most jewelers and
                            websites will only offer about 50% of the original
                            price for a diamond on the resale market. Recycled
                            diamonds are becoming more popular and offer a
                            great, sustainable alternative to lab grown
                            diamonds.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            How much do lab grown diamonds cost?
                        </Text>
                        <Text mb={"12px"}>
                            In general, lab grown diamonds cost about 67% less
                            than natural diamonds. This price relationship
                            changes over time along with changing consumer
                            sentiments over natural and lab grown diamonds but
                            generally speaking lab grown diamonds have always
                            been far less expensive than natural diamonds
                            despite being chemically identical and physically
                            indifferentiable.
                        </Text>
                        <Text mb={"24px"}>
                            Some consumers unfairly ask the difference in price
                            between real diamonds and fake diamonds, but it is
                            generally understood now that due to their physical
                            composition lab grown diamonds are very much “real
                            diamonds” despite being manufactured in a lab.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            What is diamond price per carat?
                        </Text>
                        <Text mb={"24px"}>
                            Diamond price per carat is the pricing methodology
                            that jewelers and diamond dealers use to discuss
                            diamond prices in the same way that real estate
                            agents talk about home prices in terms of “price per
                            square foot”. To calculate a diamond’s price per
                            carat, simply divide the total price by the number
                            of carats. For example, if a 2 carat diamond costs
                            $20,000 then the price per carat for that diamond is
                            $10,000 per carat.
                        </Text>
                        <Text fontSize="2xl" fontWeight={"bold"} mb={"24px"}>
                            Have further questions?
                        </Text>
                        <Text mb={"24px"}>
                            Feel free to chat us or drop us a line at
                            management@stonealgo.com
                        </Text>
                    </Text>
                </GridItem>
                <GridItem w={"100%"}>
                    <Box position={"sticky"} top={"70px"}>
                        <TableContainer>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th>Price index</Th>
                                        <Th>Chart</Th>
                                        <Th>Price (USD)</Th>
                                        <Th>% Change (1m)</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {price.slice(4).map((priceItem, i) => (
                                        <Tr key={i}>
                                            <Td>{priceItem.priceIndex}</Td>
                                            <Td>{priceItem.priceUsd}</Td>
                                            <Td>{priceItem.priceChange}</Td>
                                            <Td>{priceItem.range}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </GridItem>
            </Grid>
        </Tabs>
    );
}
