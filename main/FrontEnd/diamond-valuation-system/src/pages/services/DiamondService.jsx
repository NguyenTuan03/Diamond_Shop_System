import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Title from "../../components/Title";
import ServiceCard from "../../components/ServiceCard";

export default function DiamondService() {
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
                <ServiceCard
                    type={"STANDARD"}
                    price={100}
                    time={"15 - 20"}
                    color={"blue"}
                />
                <ServiceCard
                    type={"PRO"}
                    price={200}
                    time={"10 - 13"}
                    color={"red"}
                />
                <ServiceCard
                    type={"PREMIUM"}
                    price={300}
                    time={"5 - 7"}
                    color={"yellow"}
                />
            </Flex>
        </Flex>
    );
}
