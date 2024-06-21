import {
  Avatar,
  Box,
  Flex,
  StackDivider,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotificationsOutline, IoMdSearch } from "react-icons/io";
import { CiCalendar, CiBellOn, CiSettings } from "react-icons/ci";
import { PiCalculatorThin } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../config/Config";

export default function SideBarValuationStaff() {
  const nav = useNavigate();
  return (
    <div>
      <Box>
        <Flex align={"center"} p={3} pr={0} bg={"rgb(229 231 235)"}>
          <WrapItem mr={3}>
            <Avatar
              size={"md"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
          <Text color={"#000"}>Nguyen Thi Thu Hoai</Text>
        </Flex>
        <VStack
          py={5}
          pl={3}
          divider={<StackDivider borderColor={"rgb(243 244 246)"} />}
          spacing={0}
          align="stretch"
          bg={"rgb(243 244 246)"}
        >
          <Link to={routes.consulting_dashboard}>
            <Flex
              pl={2}
              _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
              cursor="pointer"
              borderRadius={3}
              alignItems={"center"}
              h="40px"
              color={"#000"}
            >
              <RxDashboard />
              <Text ml={3}>Dashboard</Text>
            </Flex>
          </Link>
          <Link to={routes.consulting_dasboardNotification}>
            <Flex
              pl={2}
              _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
              cursor="pointer"
              borderRadius={3}
              alignItems={"center"}
              h="40px"
              color={"#000"}
            >
              <IoIosNotificationsOutline />
              <Text ml={3}>Notifications</Text>
            </Flex>
          </Link>
          <Flex
            pl={2}
            _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
            cursor="pointer"
            borderRadius={3}
            alignItems={"center"}
            h="40px"
            color={"#000"}
          >
            <CiCalendar />
            <Text ml={3}>Appointments</Text>
          </Flex>
        </VStack>
        <Box borderTop={"2px solid #000"}>
          <VStack
            pt={5}
            pl={3}
            divider={<StackDivider borderColor={"rgb(243 244 246)"} />}
            spacing={0}
            align="stretch"
            bg={"rgb(243 244 246)"}
            borderTopColor={"#000"}
          >
            <Link to={routes.home}>
              <Flex
                pl={2}
                _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
                cursor="pointer"
                borderRadius={3}
                alignItems={"center"}
                h="40px"
                color={"#000"}
              >
                <IoHomeOutline />
                <Text ml={3}>Home</Text>
              </Flex>
            </Link>
            <Link to={routes.diamondCalculate}>
              <Flex
                pl={2}
                _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
                cursor="pointer"
                borderRadius={3}
                alignItems={"center"}
                h="40px"
                color={"#000"}
              >
                <PiCalculatorThin />
                <Text ml={3}>Valuation</Text>
              </Flex>
            </Link>
            <Link to={routes.search}>
              <Flex
                pl={2}
                _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
                cursor="pointer"
                borderRadius={3}
                alignItems={"center"}
                h="40px"
                color={"#000"}
              >
                <IoMdSearch />
                <Text ml={3}>Search</Text>
              </Flex>
            </Link>
            <Link to={routes.diamondCheck}>
              <Flex
                pl={2}
                _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
                cursor="pointer"
                borderRadius={3}
                alignItems={"center"}
                h="40px"
                color={"#000"}
              >
                <MdOutlineRemoveRedEye />
                <Text ml={3}>Diamond Check</Text>
              </Flex>
            </Link>
            <Flex
              pl={2}
              _hover={{ background: "rgb(55 65 81)", color: "#fff" }}
              cursor="pointer"
              borderRadius={3}
              alignItems={"center"}
              h="40px"
              color={"#000"}
            >
              <CiSettings />
              <Text ml={3}>Setting</Text>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </div>
  );
}

