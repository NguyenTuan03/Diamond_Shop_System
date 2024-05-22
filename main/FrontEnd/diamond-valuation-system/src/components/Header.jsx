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
  FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import routes from "../config/Config";
import { validateSignUp } from "../service/ValidateSignUp";
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
          <Link to={routes.diamondCalculate}>
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
              <Link to={routes.educationCertificate}>
                <MenuItem>Diamond Certification</MenuItem>
              </Link>
              <Link to={routes.educationShape}>
                <MenuItem>Shape</MenuItem>
              </Link>
              <Link to={routes.educationCarat}>
                <MenuItem>Carat Weight</MenuItem>
              </Link>
              <Link to={routes.educationColor}>
                <MenuItem>Diamond Color</MenuItem>
              </Link>
              <Link to={routes.educationCut}>
                <MenuItem>Cut Quality</MenuItem>
              </Link>
              <Link to={routes.educationClarity}>
                <MenuItem>Diamond Clarity</MenuItem>
              </Link>
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
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                      name="username"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </FormControl>
                  <Flex
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    m={"10px"}
                  >
                    <Text fontSize={"sm"}>Forgot password</Text>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
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
            <Formik
              initialValues={{
                username: "",
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
                password: "",
                confirmPassword: "",
              }}
              validate={(values) => {
                return validateSignUp(values);
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.username && touched.username && errors.username
                    }
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      name="username"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <FormErrorMessage>
                      {errors.username && touched.username && errors.username}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.username && touched.username && errors.username
                    }
                  >
                    <FormLabel>Full name</FormLabel>
                    <Input
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    <FormErrorMessage>
                      {errors.fullName && touched.fullName && errors.fullName}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={errors.email && touched.email && errors.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <FormErrorMessage>
                      {errors.email && touched.email && errors.email}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                  >
                    <FormLabel>Phone number</FormLabel>
                    <Input
                      name="phoneNumber"
                      type="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    <FormErrorMessage>
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      name="address"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.password && touched.password && errors.password
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <FormErrorMessage>
                      {errors.password && touched.password && errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword
                    }
                  >
                    <FormLabel>Confirm password</FormLabel>
                    <Input
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    w={"inherit"}
                    m={"10px 0 0 0"}
                    disabled={isSubmitting}
                  >
                    Sign up
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
