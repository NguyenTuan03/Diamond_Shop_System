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
} from "@chakra-ui/react";
import { IoDiamond, IoDiamondOutline } from "react-icons/io5";

import { useState } from "react";
import PopoverInfo from "../../components/PopoverInfo";
import GridValue from "../../components/GridValue";

export default function Calculate() {
  const [sliderValue, setSliderValue] = useState(1);
  const gradingLabLabel = [
    "ASG",
    "CEGL",
    "CGI",
    "CGL",
    "DCLA",
    "EGL Asia",
    "EGL Intl.",
    "EGL USA",
    "GCAL",
    "GIA",
    "HRD",
    "IGI",
  ];
  const shapeLabel = [
    "ROUND",
    "CUSHION",
    "EMERALD",
    "OVAL",
    "PRINCESS",
    "PEAR",
    "RADIANT",
    "MARQUISE",
    "ASSCHER",
    "HEART",
    "TRIANGLE",
    "BAGUETTE",
  ];
  const colorLabel = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
  const cutLabel = ["POOR", "FAIR", "GOOD", "V.GOOD", "EX.", "IDEAL"];
  const clarityLabel = [
    "IF",
    "VVS1",
    "VVS2",
    "VS1",
    "VS2",
    "SI1",
    "SI2",
    "SI3",
    "I1",
    "I2",
    "I3",
  ];
  const [gradingLabActiveButtonIndex, setGradingLabActiveButtonIndex] =
    useState(null);
  const [shapeActiveButtonIndex, setShapeActiveButtonIndex] = useState(null);
  const [colorActiveButtonIndex, setColorActiveButtonIndex] = useState(null);
  const [cutActiveButtonIndex, setCutActiveButtonIndex] = useState(null);
  const [clarityActiveButtonIndex, setClarityActiveButtonIndex] =
    useState(null);

  const [gradingLab, setGradingLab] = useState("");
  const [carat, setCarat] = useState(0.0);
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("");
  const [cut, setCut] = useState("");
  const [clarity, setClarity] = useState("");
  async function handleSubmit() {
    try {
      const res = await fetch(
        `http://www.idexonline.com/DPService.asp?SID=4wp7go123jqtkdyd5f2e&cut=${shape}&carat=${carat}&color=${color}&clarity=${clarity}&make=${cut}&cert=${gradingLab}`,
        { mode: "no-cors" }
      );
      if (!res.ok) {
        throw new Error(`Error fetching data: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w={"100vw"}
      m={"100px 0 0 0"}
    >
      <Text fontSize="3xl" fontWeight="bold">
        Diamond Price Valuation
      </Text>
      <Text fontSize="xl" fontStyle={"italic"}>
        Use our free diamond price calculator to valuate the current price for
        diamonds.
      </Text>
      <Divider m={"50px 0 50px 0"} />

      <Flex direction="row" gap={2}>
        <Center borderRadius={"md"} boxShadow={"xl"} p={4}>
          <FormControl>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Calculator Output
            </Text>
            <FormLabel color={"gray"}>GRADING LAB</FormLabel>
            <GridValue
              row={6}
              data={gradingLabLabel}
              setValue={setGradingLab}
              activeButtonIndex={gradingLabActiveButtonIndex}
              setActiveButtonIndex={setGradingLabActiveButtonIndex}
            />
            <FormLabel color={"gray"}>SHAPE</FormLabel>
            <GridValue
              row={6}
              data={shapeLabel}
              setValue={setShape}
              activeButtonIndex={shapeActiveButtonIndex}
              setActiveButtonIndex={setShapeActiveButtonIndex}
            />
            <FormLabel color={"gray"}>CARAT</FormLabel>
            <Slider
              aria-label="slider-ex-6"
              min={0.08}
              max={9.99}
              step={0.01}
              onChange={(val) => {
                setCarat(val);
                setSliderValue(val);
              }}
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
              <SliderThumb bg={"blue.400"} boxSize={6}>
                <Box as={IoDiamondOutline} />
              </SliderThumb>
            </Slider>
            <FormLabel color={"gray"}>COLOR</FormLabel>
            <GridValue
              row={4}
              data={colorLabel}
              setValue={setColor}
              activeButtonIndex={colorActiveButtonIndex}
              setActiveButtonIndex={setColorActiveButtonIndex}
            />
            <FormLabel color={"gray"}>CUT</FormLabel>
            <GridValue
              row={4}
              data={cutLabel}
              setValue={setCut}
              activeButtonIndex={cutActiveButtonIndex}
              setActiveButtonIndex={setCutActiveButtonIndex}
            />
            <FormLabel color={"gray"}>CLARITY</FormLabel>
            <GridValue
              row={4}
              data={clarityLabel}
              setValue={setClarity}
              activeButtonIndex={clarityActiveButtonIndex}
              setActiveButtonIndex={setClarityActiveButtonIndex}
            />
            <Button
              borderRadius={"md"}
              colorScheme="blue"
              w={"inherit"}
              m={"10px 0 0 0"}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </FormControl>
        </Center>
        <Flex direction={"column"} p={4} gap={5}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Calculator Output
          </Text>
          <Box borderRadius={"md"} boxShadow={"xl"} p={4}>
            <Flex direction={"column"} alignItems={"center"} gap={5}>
              <PopoverInfo
                content={"$5,234"}
                header={"Real Time Price"}
                body={"Current Average Price in USD / carat"}
                contentFontSize={"6xl"}
                headerFontSize={"xl"}
                headerColor={"black"}
              />
              <Text fontSize={"sm"} color={"gray"}>
                Round 1.00 Carat G VS2
              </Text>
              <Badge colorScheme="green" borderRadius={"md"}>
                ASG Diamond
              </Badge>
              <Flex direction={"row"} gap={20}>
                <PopoverInfo
                  content={"$5,000"}
                  header={"Min"}
                  body={"Average of lowest 10% asking price in USD / carat"}
                  contentFontSize={"sm"}
                  headerFontSize={"sm"}
                  headerColor={"gray"}
                />
                <PopoverInfo
                  content={"$5,000"}
                  header={"Average"}
                  body={
                    "Average asking price of the last 3 months in USD / carat"
                  }
                  contentFontSize={"sm"}
                  headerFontSize={"sm"}
                  headerColor={"gray"}
                />
                <PopoverInfo
                  content={"$5,000"}
                  header={"Max"}
                  body={"Average of 10% highest asking price in USD / carat"}
                  contentFontSize={"sm"}
                  headerFontSize={"sm"}
                  headerColor={"gray"}
                />
              </Flex>
            </Flex>
          </Box>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Don't know your diamond's value?
          </Text>
          <Flex dir="row" gap={2} alignItems={"center"}>
            <Text fontSize={"xl"} color={"gray"}>
              Contact with our experts to get a valuation
            </Text>
            <Button leftIcon={<IoDiamond />} colorScheme="blue">
              Valuate Diamond
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
