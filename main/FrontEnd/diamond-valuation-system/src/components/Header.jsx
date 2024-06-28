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
import { GoogleLogin } from "@react-oauth/google";
import { GiDiamondTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import routes from "../config/Config";
export default function Header() {
  const modalSignIn = useDisclosure();
  const modalSignUp = useDisclosure();
  return (
      <Container marginBottom={"70px"}>
        <ToastContainer />
        <Flex
          position={"fixed"}
          top={"0px"}
          left={"0px"}
          width={"100vw"}
          height="70px"
          zIndex={1}
          direction={"row"}
          align={"center"}
          bg={bgColor}
          style={{
            boxShadow: `0px 0px 15px 0px gray`,
            backdropFilter: "blur(20px)",
          }}
          p={5}
        >
          <Flex
            flex={1}
            display={{ base: "flex", md: "flex", lg: "none" }}
            onClick={onToggle}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={"outline"}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _focus={{ boxShadow: "outline" }}
              />
              <MenuList>
                <MenuItem>
                  <Link to={routes.diamondCheck}>Diamond Check</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.diamondCalculate}>Valuation</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.prices}>Price</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.educationCut}>Education</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Link to={routes.home}>
            <Flex
              direction={"row"}
              flex={{ base: 6, md: 1, lg: 1 }}
              alignItems={"center"}
              justify={{ base: "center", md: "start", lg: "start" }}
            >
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
          </Link>
          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            flex={6}
            direction="row"
            alignItems={"center"}
            justify={"center"}
            gap={20}
          >
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
          {console.log(auth.userAuth)}
          <Flex
            direction="row"
            flex={1}
            gap={{ base: 2, md: 3, lg: 5 }}
            alignItems={"center"}
            justify={{ base: "center", md: "end", lg: "end" }}
          >
            <IconButton
              size={{ base: "xs", md: "sm", lg: "md" }}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={changeColorMode}
            />
            {!auth.userAuth ? (
              <Button
                colorScheme="blue"
                size={{ base: "xs", md: "sm", lg: "md" }}
                onClick={modalSignIn.onOpen}
              >
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                  Sign in
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
                const errors = {};
                if (values.username.length < 6) {
                  errors.username = "Must be at least 6 characters";
                }
                if (values.email) {
                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                }
                if (values.phoneNumber) {
                  if (values.phoneNumber.length < 10) {
                    errors.phoneNumber = "Invalid phone number";
                  } else if (
                    !/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(
                      values.phoneNumber
                    )
                  ) {
                    errors.phoneNumber = "Invalid phone number";
                  }
                }
                if (values.password.length < 8) {
                  errors.password = "Must be at least 8 characters";
                }
                if (values.confirmPassword !== values.password) {
                  errors.confirmPassword = "Password does not match";
                }
                return errors;
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
                  <FormControl isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
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
