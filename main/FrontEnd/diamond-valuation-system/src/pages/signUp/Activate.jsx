import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiDiamondTrophy } from "react-icons/gi";
export default function Activate() {
    const param = useParams();
    setInterval(() => {
        console.log("activate");
    },2000)
    return (
        <Box
            w={"100%"}
            height={"80vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box border={"1px solid #00000036"} padding={"70px 80px"}>
                <Flex>
                    <Icon
                        as={GiDiamondTrophy}
                        w={{ base: 5, md: 8, lg: 10 }}
                        h={{ base: 5, md: 8, lg: 10 }}
                    />
                    <Text
                        fontFamily={"The Nautigal"}
                        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                        fontWeight={"bold"}
                        m={"10px "}
                    >
                        DiamondVal
                    </Text>
                </Flex>
                <Text fontSize={"4xl"} mb={"40px"} fontWeight={"bold"}>
                    Almost Done!
                </Text>
                <Text fontSize={"2xl"} mb={"14px"}>We just sent you an email at</Text>
                <Text fontSize={"2xl"} mb={"14px"} fontWeight={"bold"}>{param.email} </Text>
                <Text fontSize={"2xl"}>
                    Please check your inbox to validate your account.
                </Text>
                <Text fontSize={"xl"} fontFamily={"Playwrite France Traditionnelle"}>
                    Stay here and relax! 🍵
                </Text>
            </Box>
        </Box>
    );
}
