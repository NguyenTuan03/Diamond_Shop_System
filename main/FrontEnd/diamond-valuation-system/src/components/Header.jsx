import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Menu,
    useDisclosure,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GoogleLogin } from "@react-oauth/google";
import { GiDiamondTrophy } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import routes from "../config/Config";
import { useEffect } from "react";
import axios from "axios";
import Login from "../pages/login/Login";
export default function Header() {
    const modalSignIn = useDisclosure();
    const modalSignUp = useDisclosure();

    return (
        <>
            <Flex
                position={"fixed"}
                top={"0px"}
                left={"0px"}
                width={"100vw"}
                height="70px"
                zIndex={1}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"white"}
                boxShadow="2xl"
                p={5}
            >
                <Link to={routes.home}>
                    <Flex direction={"row"} alignItems={"center"}>
                        <GiDiamondTrophy size={30} />
                        <Text fontSize={"lg"} fontWeight={"bold"} m={"10px "}>
                            DIAMONDVAL
                        </Text>
                    </Flex>
                </Link>
                <Flex dir="row" gap={20}>
                    <Link to={routes.search}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>
                            Search
                        </Text>
                    </Link>
                    <Link to={routes.diamondCheck}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>
                            Diamond Check
                        </Text>
                    </Link>
                    <Link to={routes.calculate}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>
                            Valuation
                        </Text>
                    </Link>
                    <Link to={routes.prices}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>
                            Price
                        </Text>
                    </Link>
                    <Menu>
                        <MenuButton
                            transition="all 0.2s"
                            borderRadius="md"
                            borderWidth="1px"
                            _focus={{ boxShadow: "outline" }}
                        >
                            <Link to={routes.home}>
                                <Flex
                                    direction={"row"}
                                    gap={2}
                                    alignItems={"center"}
                                >
                                    <Text fontSize={"lg"} fontWeight={"bold"}>
                                        Education
                                    </Text>
                                    <ChevronDownIcon />
                                </Flex>
                            </Link>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Diamond Certification</MenuItem>
                            <MenuItem>Shape</MenuItem>
                            <MenuItem>Carat Weight</MenuItem>
                            <MenuItem>Diamond Color</MenuItem>
                            <MenuItem>Cut Quality</MenuItem>
                            <MenuItem>Diamond Clarity</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Button colorScheme="blue" onClick={modalSignIn.onOpen}>
                    Sign in
                </Button>
            </Flex>
            <Login signIn={modalSignIn} signUp={modalSignUp}/>
        </>
    );
}
