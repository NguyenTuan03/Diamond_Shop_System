import React from "react";
import SideBar from "./sidebar/SideBar";
import DashBoard from "../pages/dashboard/DashBoard";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import SideBarAdmin from './sidebar/SideBarAdmin';
import SideBarManager from './sidebar/SideBarManager';
import SideBarStaff from './sidebar/SideBarStaff';

export default function DashBoardLayout({ children }) {
    let users = {
        role: 5,
    }
    return (
        <Flex width={"100%"} height={"100vh"} bg={"rgb(243 244 246)"}>
            <Box w="256px" >
                {(users.role === 1) && <SideBarAdmin/>}
                {(users.role === 2) && <SideBarManager/>}
                {(users.role === 3) && <SideBarStaff/>}
                {(users.role === 5) && <SideBar/>}
            </Box>
            <Box flex="1" bg="#fff" pl={5}>
                {children}
            </Box>
        </Flex>
    );
}
