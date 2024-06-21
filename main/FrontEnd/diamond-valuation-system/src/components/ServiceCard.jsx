import {
    Flex,
    Text,
    Button,
    UnorderedList,
    ListItem,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Center,
  } from "@chakra-ui/react";
  import React, { useContext, useEffect } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import { UserContext } from "./GlobalContext/AuthContext";
  import axios from "axios";
  
  export default function ServiceCard({
    serviceId,
    type,
    price,
    time,
    attributes,
    color,
  }) {
    const auth = useContext(UserContext);
    const nav = useNavigate();
    const location = useLocation();
  
    const handleSubmit = async () => {
      try {
        localStorage.setItem("serviceId", serviceId);
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/vnpay/create`,
          {
            params: {
              amount: `${price}000`,
              orderInfo: "Thanh toan don hang",
              orderType: "Other",
            },
            headers: {
              "Content-Type": "text/plain",
            },
          }
        );
        const result = await response.data;
        window.location.href = result;
        console.log(result);
      } catch (error) {
        console.error("Error during payment process:", error);
      }
    };
  
    const fetchPaymentResult = async (params) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/vnpay/payment_return`,
          {
            params: params,
          }
        );
        const result = await response.data;
        console.log(result);
      } catch (error) {
        console.error("Error fetching payment result:", error);
      }
    };
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      if (queryParams.has("vnp_Amount")) {
        const params = {};
        queryParams.forEach((value, key) => {
          params[key] = value;
        });
        fetchPaymentResult(params);
      }
    }, [location.search]);
  
    return (
      <Card border={"1px solid"} w={{ base: "70vw", md: "40vw", lg: "20vw" }}>
        <CardHeader align="center">
          <Heading size={"md"} color={`${color}.400`}>
            {type}
          </Heading>
        </CardHeader>
        <Flex direction={"column"} align={"center"}>
          <Text fontSize={"5xl"}>${price}</Text>
          <Text fontSize={"lg"}>
            Valuation time: <strong>{time} days</strong>
          </Text>
        </Flex>
        <CardBody align={"start"}>
          <Text fontSize={"lg"}>We will valuate:</Text>
          <UnorderedList fontSize={"sm"}>
            {attributes.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </CardBody>
        <Center>
          <CardFooter>
            <Button onClick={handleSubmit} colorScheme={color} size={"lg"}>
              Choose
            </Button>
          </CardFooter>
        </Center>
      </Card>
    );
  }
  