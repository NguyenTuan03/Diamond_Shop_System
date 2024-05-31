import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Title from "../../components/Title";
import ServiceCard from "../../components/ServiceCard";
import { useLocation } from "react-router-dom";

export default function DiamondService() {
  const services = useLocation();
  console.log(services.state);
  useEffect(() => {}, []);
  const serviceColors = ["blue", "red", "yellow"];
  const serviceStatisticNames = [];
  try {
    for (let i = 0; i < services.state.length; i++) {
      serviceStatisticNames.push(services.state[i].service_statistic_id.name);
      serviceStatisticNames[i] = serviceStatisticNames[i]
        .split(",")
        .map((item) => item.trim());
    }
  } catch (e) {
    console.log(e);
  }
  console.log(serviceStatisticNames);
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100vw"}
      m={"50px 0 0 0"}
    >
      <Title
        title={"Choose a valuation service"}
        description={
          "Make a choice of valuation service. The faster the valuation time is, the more expensive the price is."
        }
      />
      <Divider m={"20px 0 20px 0"} />
      <Flex direction={"row"} gap={20}>
        {services.state.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              type={item.name.toUpperCase()}
              price={item.price}
              time={item.time}
              attributes={serviceStatisticNames[index]}
              color={serviceColors[index]}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
