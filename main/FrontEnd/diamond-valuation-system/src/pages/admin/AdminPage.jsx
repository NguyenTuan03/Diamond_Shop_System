import { Search2Icon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline, MdCreate } from "react-icons/md";
import ConfirmAlert from "../../components/ConfirmAlert";
import axios from "axios";

export default function AdminPage() {
  const createUser = useDisclosure();
  const updateUser = useDisclosure();
  const confirmDeleteUser = useDisclosure();
  const cancelRef = useRef();

  const [accounts, setAccounts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const fetchAccounts = async () => {
    try {
      const res = await axios
        .get("http://localhost:8081/api/admin/get")
        .then(function (response) {
          // accounts.push(...response.data);
          // setAccounts(...accounts);
          setAccounts(response.data);
          console.log(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteAccount = async (id) => {
    try {
      await axios
        .post("http://localhost:8081/api/admin/delete", { id: id })
        .then(function (response) {
          const updatedAccounts = accounts.filter(
            (account) => account.id !== id
          );
          setAccounts(updatedAccounts);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100vw"}
        m={"100px 0 0 0"}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: ADMIN
        </Text>
        <Flex direction={"row"} gap={5}>
          <InputGroup w={"40vw"}>
            <InputLeftElement pointerEvents={"none"}>
              <Search2Icon color={"gray.300"} />
            </InputLeftElement>
            <Input name="search" placeholder="Search..." />
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
        <TableContainer whiteSpace={"wrap"}>
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
                  <Td>{account.role_id.name}</Td>
                  <Td>{account.username}</Td>
                  <Td>{account.password}</Td>
                  <Td>{account.fullname}</Td>
                  <Td>{account.email}</Td>
                  <Td>{account.phone_number}</Td>
                  <Td>{account.address}</Td>
                  <Td>
                    <Center>
                      <IconButton
                        aria-label="update user"
                        icon={<GrUpdate />}
                        bgColor={"transparent"}
                        onClick={updateUser.onOpen}
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
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Modal isOpen={createUser.isOpen} onClose={createUser.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>ssd</ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={updateUser.isOpen} onClose={updateUser.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>ssd</ModalBody>
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
          deleteAccount(deleteId);
          confirmDeleteUser.onClose();
        }}
      />
    </>
  );
}
