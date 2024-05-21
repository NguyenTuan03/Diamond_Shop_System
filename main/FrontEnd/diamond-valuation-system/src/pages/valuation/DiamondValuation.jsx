import {
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Button,
  Slider,
  SliderTrack,
  SliderThumb,
  Box,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import { IoDiamond, IoDiamondOutline } from "react-icons/io5";
import { Link as LinkReactRouterDOM } from "react-router-dom";
import { useState } from "react";
import PopoverInfo from "../../components/PopoverInfo";
import GridValue from "../../components/GridValue";
import {
  sliderDiamondValuationGrade,
  sliderDiamondValuationShape,
  sliderDiamondValuationColor,
  sliderDiamondValuationCut,
  sliderDiamondValuationClarity,
} from "../../shared/SharedDiamondValuation";
export default function Calculate() {
  const [sliderValue, setSliderValue] = useState(5);
  const [sliderShowToolTip, setSliderShowToolTip] = useState(false);
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
            <FormLabel color={"gray"} m={"20px 0 0 0"}>
              GRADING LAB
            </FormLabel>
            <GridValue
              row={6}
              data={sliderDiamondValuationGrade}
              setValue={setGradingLab}
              activeButtonIndex={gradingLabActiveButtonIndex}
              setActiveButtonIndex={setGradingLabActiveButtonIndex}
            />
            <FormLabel color={"gray"} m={"20px 0 0 0"}>
              SHAPE
            </FormLabel>
            <GridValue
              row={6}
              data={sliderDiamondValuationShape}
              setValue={setShape}
              activeButtonIndex={shapeActiveButtonIndex}
              setActiveButtonIndex={setShapeActiveButtonIndex}
            />
            <FormLabel color={"gray"} m={"20px 0 0 0"}>
              CARAT
            </FormLabel>
            <Slider
              aria-label="slider-ex-6"
              min={0.08}
              max={9.99}
              step={0.01}
              onChange={(val) => {
                setCarat(val);
                setSliderValue(val);
              }}
              onMouseEnter={() => setSliderShowToolTip(true)}
              onMouseLeave={() => setSliderShowToolTip(false)}
            >
              <SliderTrack>{/* <SliderFilledTrack /> */}</SliderTrack>
              <Tooltip
                hasArrow
                bg={"blue.400"}
                color={"white"}
                placement="top"
                isOpen={sliderShowToolTip}
                label={sliderValue}
              >
                <SliderThumb bg={"blue.400"} boxSize={6}>
                  <Box as={IoDiamondOutline} />
                </SliderThumb>
              </Tooltip>
            </Slider>
            <FormLabel color={"gray"} m={"20px 0 0 0"}>
              COLOR
            </FormLabel>
            <GridValue
              row={4}
              data={sliderDiamondValuationColor}
              setValue={setColor}
              activeButtonIndex={colorActiveButtonIndex}
              setActiveButtonIndex={setColorActiveButtonIndex}
            />
            <FormLabel color={"gray"} m={"20px 0 0 0"}>
              CUT
            </FormLabel>
            <GridValue
              row={4}
              data={sliderDiamondValuationCut}
              setValue={setCut}
              activeButtonIndex={cutActiveButtonIndex}
              setActiveButtonIndex={setCutActiveButtonIndex}
            />
            <FormLabel color={"gray"} m={"20px 0 0 0"}>
              CLARITY
            </FormLabel>
            <GridValue
              row={4}
              data={sliderDiamondValuationClarity}
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
            <LinkReactRouterDOM to={"/diamond-service"}>
              <Button leftIcon={<IoDiamond />} colorScheme="blue">
                Valuate Diamond
              </Button>
            </LinkReactRouterDOM>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
