import { Flex, Select, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ManagerSealingLetterPage from "./ManagerSealingLetterPage";
import ManagerValuatedDiamondPage from "./ManagerValuatedDiamondPage";
export default function ManagerPage() {
  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Manager</Text>
        <Select w={"200px"} placeholder="Filter" onChange={handleFilterChange}>
          <option value="sealing-letter">Sealing Letter</option>
          <option value="valuated-diamond">Valuated Diamond</option>
        </Select>
        {(filter === "sealing-letter" && <ManagerSealingLetterPage />) ||
          (filter === "valuated-diamond" && <ManagerValuatedDiamondPage />)}
      </Flex>
    </>
  );
}
