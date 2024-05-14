import { Button, Grid, Text } from "@chakra-ui/react";
import React from "react";

export default function GridValue({
  row,
  data,
  activeButtonIndex,
  setActiveButtonIndex,
}) {
  return (
    <Grid templateColumns={`repeat(${row}, 1fr)`} gap={2}>
      {data.map((value, index) => {
        return (
          <Button
            key={index}
            borderRadius={"md"}
            boxShadow="xl"
            _hover={{ bg: "blue.400" }}
            backgroundColor={
              activeButtonIndex === index ? "blue.400" : "initial"
            }
            onClick={() => {
              setActiveButtonIndex(index);
            }}
          >
            <Text fontSize={"sm"}>{value}</Text>
          </Button>
        );
      })}
    </Grid>
  );
}
