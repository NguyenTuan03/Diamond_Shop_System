import React from "react";
import { Button } from "@chakra-ui/react";

export default function PageIndicator({
  totalPages,
  setCurrentPage,
}) {
  const pageIndicator = [];
  if (totalPages !== null) {
    for (let i = 1; i <= totalPages; i++) {
      pageIndicator.push(
        <Button
          key={i}
          colorScheme="teal"
          variant={"outline"}
          onClick={() => {
            setCurrentPage(i);
          }}
        >
          {i}
        </Button>
      );
    }
  }
  return <>{pageIndicator}</>;
}
