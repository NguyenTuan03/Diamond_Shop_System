import React, { useContext } from "react";
import SideBar from "./sidebar/SideBar";
import { Box, Flex } from "@chakra-ui/react";
import SideBarAdmin from "./sidebar/SideBarAdmin";
import SideBarManager from "./sidebar/SideBarManager";
import SideBarConsultingStaff from "./sidebar/SideBarConsultingStaff";
import SideBarValuationStaff from "./sidebar/SideBarValuationStaff";
import { UserContext } from "../components/GlobalContext/AuthContext";

export default function DashBoardLayout({ children }) {
    const user = useContext(UserContext);
    return (
        <Flex width={"100%"} height={"100vh"} bg={"rgb(243 244 246)"}>
            <Box w="256px">
                {users.role === 1 && <SideBarAdmin />}
                {users.role === 2 && <SideBarManager />}
                {/* {users.role === 3 && <SideBarConsultingStaff />} */}
                {users.role === 4 && <SideBarValuationStaff />}
                {users.role === 5 && <SideBar />}
            </Box>
            <Box flex="1" bg="#fff" px={5} pt={"120px"}>
                {children}
            </Box>
        </Flex>
    );
}
