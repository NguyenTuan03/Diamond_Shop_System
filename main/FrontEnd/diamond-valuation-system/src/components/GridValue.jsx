import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function GridValue({
  row,
  name,
  data,
  gridValue,
  setGridValue,
  activeButtonIndex,
  setActiveButtonIndex,
}) {
  const isError = gridValue === "";
  const handleClick = (value, index) => {
    if (activeButtonIndex === index) {
      setGridValue("");
      setActiveButtonIndex(-1);
    } else {
      setGridValue(value);
      setActiveButtonIndex(index);
    }
  };
  const responsiveCols = useBreakpointValue({
    base: 2,
    md: 3,
    lg: row,
  });
  
  const bgColor = useColorModeValue("blue.400", "yellow.400");
  return (
    <FormControl isRequired isInvalid={isError}>
      <FormLabel color={"gray"} m={"20px 0 0 0"}>
        {name}
      </FormLabel>
      <Grid templateColumns={`repeat(${responsiveCols}, 1fr)`} gap={2}>
        {data.map((value, index) => {
          return (
            <Button
              key={index}
              size={{ base: "sm", md: "md", lg: "md"}}
              borderRadius={"md"}
              style={{
                boxShadow: `0px 0px 2px 0px gray`,
                backdropFilter: "blur(10px)",
              }}
              _hover={{ bg: bgColor, transform: "scale(1.1)" }}
              backgroundColor={
                activeButtonIndex === index ? bgColor : "initial"
              }
              onClick={() => handleClick(value, index)}
            >
              <Text fontSize={{ base: "xs", md: "sm", lg: "sm" }}>{value}</Text>
            </Button>
          );
        })}
      </Grid>
      {isError && <FormErrorMessage>{name} is required.</FormErrorMessage>}
    </FormControl>
  );
}
