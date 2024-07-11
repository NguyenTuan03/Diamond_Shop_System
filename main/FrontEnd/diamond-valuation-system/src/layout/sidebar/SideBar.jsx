import React, { useContext } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Divider,
  Spacer,
  useColorModeValue,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoDiamondSharp,
} from "react-icons/io5";
import { IoIosNotificationsOutline, IoMdSearch } from "react-icons/io";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { PiCalculatorThin } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { BsNewspaper } from "react-icons/bs";
import { RiBookMarkedFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GiCheckeredDiamond } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import routes from "../../config/Config";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import Profile from "../../components/Profile";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useContext(UserContext);
  const bg = useColorModeValue("gray.800", "black");
  const color = useColorModeValue("white", "gray.200");
  const hoverBg = useColorModeValue("purple.700", "purple.600");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const isUsers =
    auth.userAuth &&
    auth.userAuth.authorities &&
    auth.userAuth.authorities.length > 0;
  const menuItems = [
    {
      role: ["Manager","Consulting staff", "Valuation staff", "Customer"],
      path: routes.dasboardNotification,
      icon: IoIosNotificationsOutline,
      label: "Notifications",
    },
    {
      role: ["Admin"],
      path: routes.manageAccount,
      icon: MdManageAccounts,
      label: "Manage Account",
    },
    {
      role: ["Manager"],
      path: routes.manageService,
      icon: GiCheckeredDiamond,
      label: "Manage Service",
    },
    {
      role: ["Manager", "Customer"],
      path: routes.sealingLetter,
      icon: IoNewspaperOutline,
      label: "Sealing Letter",
    },
    {
      role: ["Customer"],
      path: routes.dashboardTransaction,
      icon: IoNewspaperOutline,
      label: "Transaction history",
    },
    {
      role: ["Manager", "Customer"],
      path: routes.commitment,
      icon: RiBookMarkedFill,
      label: "Commitment",
    },
    {
      role: ["Manager"],
      path: "#",
      icon: IoDiamondSharp,
      label: "Valuated Diamond",
    },
    {
      role: ["Manager", "Consulting staff", "Customer"],
      path: routes.pendingRequest,
      icon: IoNewspaperOutline,
      label: "Appointments",
    },
    {
      role: ["Manager", "Consulting staff", "Customer"],
      path: routes.processRequest,
      icon: VscServerProcess,
      label: "Process Request",
    },
    {
      role: ["Valuation staff"],
      path: routes.valuationDiamond,
      icon: BsNewspaper,
      label: "Valuation Diamond",
    },
  ];

  const generalMenuItems = [
    {
      path: "/",
      icon: IoHomeOutline,
      label: "Home",
    },
    {
      path: routes.diamondCalculate,
      icon: PiCalculatorThin,
      label: "Valuation",
    },
    {
      path: routes.diamondCheck,
      icon: MdOutlineRemoveRedEye,
      label: "Diamond Check",
    },
    {
      role: ["Customer"],
      path: routes.dashboardSetting,
      icon: CiSettings,
      label: "Setting",
    },
    {
      path: "#",
      icon: FiLogOut,
      label: "Logout",
    },
  ];

  const renderMenuItem = ({ path, icon: Icon, label }) => (
    <Link to={path} key={label}>
      <Flex
        align="center"
        p="3"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: hoverBg,
          color: "white",
        }}
      >
        <Icon />
        
        <Text ml="4">{label}</Text>
      </Flex>
    </Link>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            aria-label="Open Menu"
            m={3}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing="1" align="stretch">
                  <Link to={routes.dashboard}>
                    <Flex
                      align="center"
                      p="3"
                      mx="4"
                      borderRadius="lg"
                      role="group"
                      cursor="pointer"
                      _hover={{
                        bg: hoverBg,
                        color: "white",
                      }}
                    >
                      <RxDashboard />
                      <Text ml="4">Dashboard</Text>
                    </Flex>
                  </Link>
                  {menuItems
                    .filter((item) => {
                      return (
                        item.role.length === 0 ||
                        item.role.includes(
                          auth.userAuth.authorities[0].authority
                        )
                      );
                    })
                    .map(renderMenuItem)}
                </VStack>
                <Spacer />
                <Divider my="8" borderColor="gray.600" />
                <VStack spacing="2" align="stretch">
                  {generalMenuItems
                    .filter(
                      (item) =>
                        !item.role ||
                        item.role.map((item) => {
                          return item.includes(
                            auth.userAuth.authorities[0].authority
                          );
                        })
                    )
                    .map(renderMenuItem)}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box
          bg={bg}
          color={color}
          minH="100vh"
          w="250px"
          pos="fixed"
          borderRight="1px"
          borderColor="gray.200"
          maxH="100vh" 
          overflowY="auto"
        >
          <Profile />
          <Divider my="8" borderColor="gray.600" />
          <VStack spacing="2" align="stretch">
            <Link to={routes.dashboard}>
              <Flex
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                  color: "white",
                }}
              >
                <RxDashboard />
                <Text ml="4">Dashboard</Text>
              </Flex>
            </Link>
            {isUsers&&menuItems
              .filter((item) => {
                return (
                  item.role.length === 0 ||
                  item.role.includes(auth.userAuth.authorities[0].authority)
                );
              })
              .map(renderMenuItem)}
          </VStack>
          <Spacer />
          <Divider my="8" borderColor="gray.600" />
          <VStack spacing="2" align="stretch">
            {generalMenuItems
              .filter((item) => {
                if (isUsers) {
                  return (
                    !item.role ||
                    item.role.map((item) => {
                      return item === auth.userAuth.authorities[0].authority;
                    })
                  );
                }
              })
              .map(renderMenuItem)}
          </VStack>
        </Box>
      )}
    </>
  );
};

export default SideBar;
