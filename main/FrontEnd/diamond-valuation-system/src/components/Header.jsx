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
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";

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
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={"white"}
        boxShadow="2xl"
      >
        <Text fontSize={"lg"} fontWeight={"bold"} m={"10px "}>
          DIAMONDVAL
        </Text>
        <Flex dir="row" gap={20}>
          <Link to={"/"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              SEARCH
            </Text>
          </Link>
          <Link to={"/"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              DIAMOND CHECK
            </Text>
          </Link>
          <Link to={"/"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              CALCULATE
            </Text>
          </Link>
          <Link to={"/"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              PRICE
            </Text>
          </Link>
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
              <Button type="submit" colorScheme="blue" w={"inherit"} m={"10px 0 0 0"}>
                Sign up
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
