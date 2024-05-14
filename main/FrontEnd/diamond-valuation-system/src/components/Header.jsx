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
import { Link } from "react-router-dom";
import routes from "../config/Config";
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
              <Link to={"/"}>
                <Flex direction={"row"} gap={2} alignItems={"center"}>
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
      <Modal isOpen={modalSignIn.isOpen} onClose={modalSignIn.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"ls"}>Sign in to DiamondVal</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
              <FormLabel>Password</FormLabel>
              <Input type="password" />
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                m={"10px"}
              >
                <Text fontSize={"sm"}>Forgot password</Text>
                <Button type="submit" colorScheme="blue">
                  Sign in
                </Button>
              </Flex>
              <GoogleLogin />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
            >
              <Text fontSize={"sm"}>Don't have an account? </Text>
              <Link>
                <Text
                  fontSize={"sm"}
                  onClick={() => {
                    modalSignUp.onOpen();
                    modalSignIn.onClose();
                  }}
                >
                  Sign up
                </Text>
              </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={modalSignUp.isOpen} onClose={modalSignUp.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"ls"}>Sign up to DiamondVal</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
              <FormLabel>Full name</FormLabel>
              <Input type="text" />
              <FormLabel>Email</FormLabel>
              <Input type="email" />
              <FormLabel>Phone number</FormLabel>
              <Input type="tel" />
              <FormLabel>Password</FormLabel>
              <Input type="password" />
              <FormLabel>Confirm password</FormLabel>
              <Input type="password" />
              <Button
                type="submit"
                colorScheme="blue"
                w={"inherit"}
                m={"10px 0 0 0"}
              >
                Sign up
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
