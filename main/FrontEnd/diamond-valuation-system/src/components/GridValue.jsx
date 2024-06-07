import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Text,
  useBreakpointValue,
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
  // const responsiveCols = useBreakpointValue({
  //   base: 2,
  //   md: Math.min(row, 2),
  //   lg: row,
  // });
  return (
    <FormControl isRequired isInvalid={isError}>
      <FormLabel color={"gray"} m={"20px 0 0 0"}>
        {name}
      </FormLabel>
      <Grid templateColumns={`repeat(${row}, 1fr)`} gap={2}>
        {data.map((value, index) => {
          return (
            <Button
              key={index}
              borderRadius={"md"}
              style={{
                boxShadow: `0px 0px 2px 0px gray`,
                backdropFilter: "blur(10px)",
              }}
              _hover={{ bg: "blue.400" }}
              backgroundColor={
                activeButtonIndex === index ? "blue.400" : "initial"
              }
              onClick={() => handleClick(value, index)}
            >
              <Text fontSize={"sm"}>{value}</Text>
            </Button>
          );
        })}
      </Grid>
      {isError && <FormErrorMessage>{name} is required.</FormErrorMessage>}
    </FormControl>
  );
}
