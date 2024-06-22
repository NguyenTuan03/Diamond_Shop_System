import React, { useContext } from "react";
import SideBar from "./sidebar/SideBar";
import DashBoard from "../pages/dashboard/consulting/ConsultingDashBoard";
import { Box, Flex } from "@chakra-ui/react";
import SideBarAdmin from "./sidebar/SideBarAdmin";
import SideBarManager from "./sidebar/SideBarManager";
import SideBarStaff from "./sidebar/SideBarConsultingStaff";
import SideBarConsultingStaff from "./sidebar/SideBarConsultingStaff";
import SideBarValuationStaff from "./sidebar/SideBarValuationStaff";
import { UserContext } from "../components/GlobalContext/AuthContext";

export default function DashBoardLayout({ children }) {
    const user = useContext(UserContext);
    return (
        <Flex width={"100%"} height={"100vh"} bg={"rgb(243 244 246)"}>
            <Box w="256px">
                {user.userAuth.roleid === 1 && <SideBarAdmin />}
                {user.userAuth.roleid === 2 && <SideBarManager />}
                {user.userAuth.roleid === 3 && <SideBarConsultingStaff />}
                {user.userAuth.roleid === 4 && <SideBarValuationStaff />}
                {user.userAuth.roleid === 5 && <SideBar />}
            </Box>
            <Box flex="1" bg="#fff" px={5} pt={"120px"}>
                {children}
            </Box>
        </Flex>
    );
}
