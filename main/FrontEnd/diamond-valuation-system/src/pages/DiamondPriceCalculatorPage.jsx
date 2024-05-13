import {
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Button,
  Grid,
  Slider,
  SliderMark,
  SliderTrack,
  SliderThumb,
  Box,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function DiamondPriceCalculatorPage() {
  const [sliderValue, setSliderValue] = useState(1);
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={"100vw"}
        m={"100px 0 0 0"}
      >
        <Text fontSize="3xl" fontWeight="bold">
          Diamond Price Calculator
        </Text>
        <Text fontSize="xl" fontStyle={"italic"}>
          Use our free diamond price calculator to estimate the current retail
          price for diamonds.
        </Text>
        <Divider m={"50px 0 50px 0"} />

        <Flex direction="row" gap={2}>
          <Center borderRadius={"md"} boxShadow={"xl"} p={4}>
            <FormControl>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Calculator Output
              </Text>
              <FormLabel color={"gray"}>GRADING LAB</FormLabel>
              <Grid templateColumns={"repeat(6, 1fr)"} gap={2}>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>ASG</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>CEGL</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>CGI</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>CGL</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>DCLA</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>EGL Asia</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>EGL Intl.</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>EGL USA</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>GCAL</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>GIA</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>HRD</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>IGI</Text>
                </Button>
              </Grid>
              <FormLabel color={"gray"}>SHAPE</FormLabel>
              <Grid templateColumns={"repeat(6, 1fr)"} gap={2}>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>ROUND</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>CUSHION</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>EMERALD</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>OVAL</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>PRINCESS</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>PEAR</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>RADIANT</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>MARQUISE</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>ASSCHER</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>HEART</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>TRIANGLE</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>BAGUETTE</Text>
                </Button>
              </Grid>
              <FormLabel color={"gray"}>CARAT</FormLabel>
              <Slider
                aria-label="slider-ex-6"
                min={0.08}
                max={9.99}
                step={0.01}
                onChange={(val) => setSliderValue(val)}
              >
                <SliderMark
                  value={sliderValue}
                  textAlign={"center"}
                  bg={"blue.500"}
                  color={"white"}
                  borderRadius={"20px"}
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {sliderValue}
                </SliderMark>
                <SliderTrack>{/* <SliderFilledTrack /> */}</SliderTrack>
                <SliderThumb bg={"blue.400"} />
              </Slider>
              <FormLabel color={"gray"}>COLOR</FormLabel>
              <Grid templateColumns={"repeat(4, 1fr)"} gap={2}>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>D</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>E</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>F</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>G</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>H</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>I</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>J</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>K</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>L</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>M</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>N</Text>
                </Button>
              </Grid>
              <FormLabel color={"gray"}>CUT</FormLabel>
              <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>POOR</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>FAIR</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>GOOD</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>V.GOOD</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>EX.</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>IDEAL</Text>
                </Button>
              </Grid>
              <FormLabel color={"gray"}>CLARITY</FormLabel>
              <Grid templateColumns={"repeat(4, 1fr)"} gap={2}>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>IF</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>VVS1</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>VVS2</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>VS1</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>VS2</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>SI1</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>SI2</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>SI3</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>I1</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>I2</Text>
                </Button>
                <Button borderRadius={"md"} boxShadow="xl">
                  <Text fontSize={"sm"}>I3</Text>
                </Button>
              </Grid>
              <Button
                borderRadius={"md"}
                colorScheme="blue"
                w={"inherit"}
                m={"10px 0 0 0"}
              >
                SUBMIT
              </Button>
            </FormControl>
          </Center>
          <Flex direction={"column"} p={4}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Calculator Output
            </Text>
            <Box borderRadius={"md"} boxShadow={"xl"} p={4}>
              <Flex direction={"column"} alignItems={"center"} gap={5}>
                <Popover>
                  <PopoverTrigger>
                    <Flex direction={"row"} gap={2}>
                      <Text fontSize={"xl"}>Real Time Price</Text>
                      <InfoOutlineIcon boxSize={3} />
                    </Flex>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader> Real Time Price</PopoverHeader>
                    <PopoverBody>
                      Our real time prices give an indication of how a diamond
                      category is performing. Our data is updated every hour and
                      compared to the last 3 months. The diamond categories are
                      defined by their carat weight, cut shape, color, clarity,
                      certification lab and quality of the diamond
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <Flex direction={"row"} gap={2}>
                      <Text fontSize={"6xl"} fontWeight={"bold"}>
                        $5,234
                      </Text>
                      <InfoOutlineIcon boxSize={3} />
                    </Flex>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Price</PopoverHeader>
                    <PopoverBody>
                      Current Average Trading Price in USD / carat
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Text fontSize={"sm"} color={"gray"}>
                  Round 1.00 Carat G VS2
                </Text>
                <Badge colorScheme="green" borderRadius={"md"}>
                  ASG Diamond
                </Badge>
                <Flex direction={"row"} gap={20}>
                  <Popover>
                    <PopoverTrigger>
                      <Flex direction={"column"} alignItems={"center"}>
                        <Flex direction={"row"} gap={2}>
                          <Text fontSize={"sm"} color={"gray"}>
                            Min
                          </Text>
                          <InfoOutlineIcon boxSize={3} />
                        </Flex>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                          $5,000
                        </Text>
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Min</PopoverHeader>
                      <PopoverBody>
                        Average of lowest 10% asking price in USD / carat
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex direction={"column"} alignItems={"center"}>
                        <Flex direction={"row"} gap={2}>
                          <Text fontSize={"sm"} color={"gray"}>
                            Average
                          </Text>
                          <InfoOutlineIcon boxSize={3} />
                        </Flex>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                          $5,000
                        </Text>
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Average</PopoverHeader>
                      <PopoverBody>
                        Average asking price of the last 3 months in USD / carat
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger>
                      <Flex direction={"column"} alignItems={"center"}>
                        <Flex direction={"row"} gap={2}>
                          <Text fontSize={"sm"} color={"gray"}>
                            Max
                          </Text>
                          <InfoOutlineIcon boxSize={3} />
                        </Flex>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                          $5,000
                        </Text>
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Min</PopoverHeader>
                      <PopoverBody>
                        Average of 10% highest asking price in USD / carat
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
