import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { PiPiggyBankBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";

import axios from "axios";

export default function DashBoard() {
  const user = useContext(UserContext);
  const [income, setIncome] = useState(null);
  const [doneRequest, setDoneRequest] = useState(null);
  const [valuatedDiamond, setValuatedDiamond] = useState(null);
  const fetchTotalIncome = async () => {
    await axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/payment/income`)
      .then((res) => {
        setIncome(res.data);
      });
  };
  const fetchTotalDoneRequest = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/api/process-request/total/done`
      )
      .then((res) => {
        console.log(res.data);
        setDoneRequest(res.data);
      });
  };
  const fetchTotalValuatedDiamond = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/valuation-result/total`
      )
      .then((res) => {
        setValuatedDiamond(res.data);
      });
  };
  useEffect(() => {
    fetchTotalIncome();
    fetchTotalDoneRequest();
    fetchTotalValuatedDiamond();
  }, []);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Card border={"md"} shadow={"md"}>
          <CardHeader>
            <Flex align={"center"} gap={15}>
              <PiPiggyBankBold size={30} />
              <Text fontSize={"2xl"}>INCOME</Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Center gap={2}>
              <Text fontSize={"5xl"}>{income || "N/A"}</Text>vnd
            </Center>
          </CardBody>
        </Card>
        <Card border={"md"} shadow={"md"} >
          <CardHeader>
            <Flex align={"center"} gap={15}>
              <MdDone size={30} style={{ background: "green" }} />
              <Text fontSize={"2xl"}>DONE REQUEST</Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Center gap={2}>
              <Text fontSize={"5xl"}>{doneRequest}</Text>
            </Center>
          </CardBody>
        </Card>
        <Card border={"md"} shadow={"md"}>
          <CardHeader>
            <Flex align={"center"} gap={15}>
              <IoDiamond size={30} />
              <Text fontSize={"2xl"}>VALUATED DIAMOND</Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Center gap={2}>
              <Text fontSize={"5xl"}>{valuatedDiamond}</Text>
            </Center>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}
