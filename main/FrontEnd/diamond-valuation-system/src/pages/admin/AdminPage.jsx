import { Search2Icon, ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Select,
  useToast,
  useColorModeValue,
  InputLeftAddon,
  FormHelperText,
  Container,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline, MdCreate } from "react-icons/md";
import ConfirmAlert from "../../components/ConfirmAlert";
import axios from "axios";
import { Form, Formik } from "formik";
import { validateSignUp } from "../../utils/ValidateSignUp";
import { useDebounce } from "@uidotdev/usehooks";
export default function AdminPage() {
  const bgColor = useColorModeValue("white", "black");

  const toast = useToast();

  const createUser = useDisclosure();
  const updateUser = useDisclosure();
  const viewUser = useDisclosure();
  const confirmDeleteUser = useDisclosure();
  const cancelRef = useRef();

  const [accounts, setAccounts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [updateAcc, setUpdateAcc] = useState({});
  const [currentAcc, setCurrentAcc] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const pageIndicator = [];

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearch(formData.get("search"));
    e.target.reset();
    e.target.focus();
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFilter(formData.get("filter"));
    e.target.reset();
    e.target.focus();
  };
  for (let i = 1; i <= totalPage; i++) {
    pageIndicator.push(
      <Button
        key={i}
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setCurrentPage(i);
          console.log("current:" + currentPage);
        }}
      >
        {i}
      </Button>
    );
  }
  useEffect(() => {
    fetchAccounts("", currentPage, "");
  }, [currentPage]);
  useEffect(() => {
    if (debouncedSearch) {
      console.log("searching");
      fetchAccounts(debouncedSearch, currentPage, filter || "");
    } else {
      fetchAccounts("", currentPage, "");
    }
  }, [debouncedSearch]);
  const fetchAccounts = async (search, pageId, filter) => {
    try {
      const res = await axios
        .get(
          `http://localhost:8081/api/admin/get?search=${search}&page=${pageId}&filter=${filter}`
        )
        .then(function (response) {
          setAccounts(response.data.content);
          setTotalPage(response.data.totalPages);
        });
    } catch (err) {
      console.log(err);
      toast({
        title: "User fetch failed.",
        description: "Failed to fetch user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const createAccount = async (
    roleid,
    username,
    password,
    fullname,
    email,
    phonenumber,
    address
  ) => {
    try {
      const res = await axios.post("http://localhost:8081/api/admin/create", {
        roleid: roleid,
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        phonenumber: phonenumber,
        address: address,
      });
      if (res.data.includes("exist")) {
        toast({
          title: "User creation failed.",
          description: res.data,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "User created.",
          description: "User has been created successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        fetchAccounts("", currentPage, "");
      }
    } catch (err) {
      toast({
        title: "User creation failed.",
        description: "Failed to create user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };
  const updateAccount = async (
    id,
    roleid,
    fullname,
    email,
    phonenumber,
    address
  ) => {
    try {
      const res = await axios.post("http://localhost:8081/api/admin/update", {
        id: id,
        roleid: roleid,
        fullname: fullname,
        email: email,
        phonenumber: phonenumber,
        address: address,
      });
      if (res.data.includes("exist")) {
        toast({
          title: "User update failed.",
          description: res.data,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "User updated.",
          description: "User has been updated successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        fetchAccounts("", currentPage, "");
      }
    } catch (err) {
      toast({
        title: "User update failed.",
        description: "Failed to update user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };
  const deleteAccount = async (id) => {
    try {
      await axios
        .post("http://localhost:8081/api/admin/delete", { id: id })
        .then(function (response) {
          fetchAccounts("", currentPage, "");
          toast({
            title: "User deleted.",
            description: "User has been deleted successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        });
    } catch (err) {
      toast({
        title: "User deletion failed.",
        description: "Failed to delete user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
    <>
      <Container maxW="100vw">
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100vh"}
          gap={10}
          bg={bgColor}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
          >
            Welcome: ADMIN
          </Text>
          <form onSubmit={(handleSearchSubmit, handleFilterSubmit)}>
            <Flex direction={"row"} gap={5}>
              <Select
                name="filter"
                w={"120px"}
                placeholder="Filter"
                onChange={handleFilterChange}
              >
                <option value="fullname">Name</option>
                <option value="email">Email</option>
                <option value="phone_number">Phone</option>
              </Select>
              <InputGroup w={"40vw"}>
                <InputLeftElement pointerEvents={"none"}>
                  <Search2Icon color={"gray.300"} />
                </InputLeftElement>
                <Input
                  name="search"
                  placeholder="Search..."
                  onChange={handleSearchChange}
                />
              </InputGroup>
              <Tooltip
                hasArrow
                label="Create a new user"
                bg={"teal"}
                placement="right"
              >
                <IconButton
                  aria-label="create user"
                  colorScheme="teal"
                  icon={<MdCreate />}
                  onClick={() => createUser.onOpen()}
                />
              </Tooltip>
            </Flex>
          </form>
          <TableContainer
            display={{ base: "block", md: "none", lg: "none" }}
            whiteSpace={"wrap"}
          >
            <Table size={"sm"} colorScheme="blue">
              <Thead bgColor={"blue.400"}>
                <Tr>
                  <Th>No</Th>
                  <Th>Role</Th>
                  <Th>Full Name</Th>
                  <Th>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accounts.map((account, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{account.role.name}</Td>
                    <Td>{account.fullname}</Td>
                    <Td>
                      <Center>
                        <IconButton
                          aria-label="view user"
                          icon={<ViewIcon />}
                          bgColor={"transparent"}
                          onClick={() => {
                            setCurrentAcc(account);
                            viewUser.onOpen();
                          }}
                        />
                      </Center>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <TableContainer
            display={{ base: "none", md: "block", lg: "block" }}
            whiteSpace={"wrap"}
          >
            <Table size={"sm"} colorScheme="blue">
              <Thead bgColor={"blue.400"}>
                <Tr>
                  <Th>No</Th>
                  <Th>Role</Th>
                  <Th>Username</Th>
                  <Th>Password</Th>
                  <Th>Full Name</Th>
                  <Th>Email</Th>
                  <Th>Phone number</Th>
                  <Th>Address</Th>
                  <Th>Update</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accounts.map((account, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{account.role.name}</Td>
                    <Td>{account.username}</Td>
                    <Td>***</Td>
                    <Td>{account.fullname}</Td>
                    <Td>{account.email}</Td>
                    <Td>{account.phone_number}</Td>
                    <Td
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                      maxW={"300px"}
                    >
                      {account.address}
                    </Td>
                    <Td>
                      <Center>
                        <IconButton
                          aria-label="update user"
                          icon={<GrUpdate />}
                          bgColor={"transparent"}
                          onClick={() => {
                            setUpdateAcc(account);
                            updateUser.onOpen();
                          }}
                        />
                      </Center>
                    </Td>
                    <Td>
                      <Center>
                        <IconButton
                          aria-label="delete user"
                          icon={<MdDeleteOutline size={25} color="red" />}
                          bgColor={"transparent"}
                          onClick={() => {
                            setDeleteId(account.id);
                            confirmDeleteUser.onOpen();
                          }}
                        />
                        <ConfirmAlert
                          isOpen={confirmDeleteUser.isOpen}
                          onClose={confirmDeleteUser.onClose}
                          cancelRef={cancelRef}
                          header={"Delete User"}
                          body={"Are you sure you want to delete this user?"}
                          action={"Delete"}
                          colorScheme={"red"}
                          onClickFunc={() => {
                            deleteAccount(deleteId);
                            confirmDeleteUser.onClose();
                          }}
                        />
                      </Center>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex direction={"row"} gap={5}>
            {pageIndicator}
          </Flex>
        </Flex>
        <Modal isOpen={viewUser.isOpen} onClose={viewUser.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>View user</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction={"column"} gap={5}>
                <Text>
                  <strong>Role</strong>: {currentAcc.role?.name}
                </Text>
                <Text>
                  <strong>Username</strong>: {currentAcc.username}
                </Text>
                <Text>
                  <strong>Full name</strong>: {currentAcc.fullname}
                </Text>
                <Text>
                  <strong>Email</strong>: {currentAcc.email}
                </Text>
                <Text>
                  <strong>Phone number</strong>: {currentAcc.phone_number}
                </Text>
                <Text>
                  <strong>Address</strong>: {currentAcc.address}
                </Text>
                <Center>
                  <Flex direction={"row"} gap={5}>
                    <IconButton
                      aria-label="update user"
                      icon={<GrUpdate />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setUpdateAcc(currentAcc);
                        updateUser.onOpen();
                      }}
                    />
                    <IconButton
                      aria-label="delete user"
                      icon={<MdDeleteOutline size={25} color="red" />}
                      bgColor={"transparent"}
                      onClick={() => {
                        setDeleteId(currentAcc.id);
                        confirmDeleteUser.onOpen();
                      }}
                    />
                  </Flex>
                </Center>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal isOpen={createUser.isOpen} onClose={createUser.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new user</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{
                  role: "",
                  username: "",
                  password: "",
                  fullName: "",
                  email: "",
                  phoneNumber: "",
                  address: "",
                }}
                validate={(values) => {
                  return validateSignUp(values, "createAdmin");
                }}
                onSubmit={(values, { setSubmitting }) => {
                  createAccount(
                    values.role,
                    values.username,
                    values.password,
                    values.fullName,
                    values.email,
                    values.phoneNumber,
                    values.address
                  )
                    .then(() => {
                      setSubmitting(false);
                      createUser.onClose();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
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
                    <FormControl isRequired>
                      <FormLabel>Role</FormLabel>
                      <Select
                        name="role"
                        placeholder="Select a role"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.role}
                      >
                        <option value="1">Admin</option>
                        <option value="2">Manager</option>
                        <option value="3">Consulting Staff</option>
                        <option value="4">Valuation Staff</option>
                        <option value="5">Customer</option>
                        <option value="6">Guest</option>
                      </Select>
                    </FormControl>
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
                      <FormHelperText>abc@def.xyz</FormHelperText>
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
                      <InputGroup>
                        <InputLeftAddon>+84</InputLeftAddon>
                        <Input
                          name="phoneNumber"
                          type="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                        />
                      </InputGroup>
                      <FormHelperText>Ex: 0832428279</FormHelperText>
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
                    <Center>
                      <Button
                        type="submit"
                        colorScheme="blue"
                        w={"inherit"}
                        m={"10px 0 0 0"}
                        disabled={isSubmitting}
                      >
                        Create
                      </Button>
                    </Center>
                  </Form>
                )}
              </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal isOpen={updateUser.isOpen} onClose={updateUser.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update user</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{
                  role: updateAcc.role?.id || "",
                  fullName: updateAcc.fullname,
                  email: updateAcc.email,
                  phoneNumber: updateAcc?.phone_number || "",
                  address: updateAcc.address,
                }}
                validate={(values) => {
                  return validateSignUp(values, "updateAdmin");
                }}
                onSubmit={(values, { setSubmitting }) => {
                  updateAccount(
                    updateAcc.id,
                    values.role,
                    values.fullName,
                    values.email,
                    values.phoneNumber,
                    values.address
                  )
                    .then(() => {
                      updateUser.onClose();
                      setSubmitting(false);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
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
                    <FormControl>
                      <FormLabel>Role</FormLabel>
                      <Select
                        name="role"
                        placeholder="Select a role"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.role}
                      >
                        <option value="1">Admin</option>
                        <option value="2">Manager</option>
                        <option value="3">Consulting Staff</option>
                        <option value="4">Valuation Staff</option>
                        <option value="5">Customer</option>
                        <option value="6">Guest</option>
                      </Select>
                    </FormControl>
                    <FormControl
                      isRequired
                      isInvalid={
                        errors.fullName && touched.fullName && errors.fullName
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
                      <FormHelperText>abc@def.xyz</FormHelperText>
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
                      <InputGroup>
                        <InputLeftAddon>+84</InputLeftAddon>
                        <Input
                          name="phoneNumber"
                          type="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                        />
                      </InputGroup>
                      <FormHelperText>Ex: 0832428279</FormHelperText>
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
                    <Center>
                      <Button
                        type="submit"
                        colorScheme="blue"
                        w={"inherit"}
                        m={"10px 0 0 0"}
                        disabled={isSubmitting}
                      >
                        Update
                      </Button>
                    </Center>
                  </Form>
                )}
              </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
        <ConfirmAlert
          isOpen={confirmDeleteUser.isOpen}
          onClose={confirmDeleteUser.onClose}
          cancelRef={cancelRef}
          header={"Delete User"}
          body={"Are you sure you want to delete this user?"}
          action={"Delete"}
          colorScheme={"red"}
          onClickFunc={() => {
            confirmDeleteUser.onClose();
            deleteAccount(deleteId);
          }}
        />
      </Container>
    </>
  );
}
