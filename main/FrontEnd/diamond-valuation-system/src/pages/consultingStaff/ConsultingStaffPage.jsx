import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Td,
  Tr,
  Textarea,
  useToast,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { EmailIcon, Search2Icon, ViewIcon } from "@chakra-ui/icons";
import { Form, Formik } from "formik";
import ConfirmAlert from "../../components/ConfirmAlert";
export default function ConsultingStaffPage() {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toast = useToast();
  const viewValuationRequest = useDisclosure();
  const sendEmailModal = useDisclosure();
  const viewValuationReceipt = useDisclosure();
  const confirmCreateReceipt = useDisclosure();
  const cancelRef = useRef();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(`${serviceID}`, `${templateID}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          console.log("SUCCESS");
          toast({
            title: "Email sent successfully",
            description: "We have sent an email to the customer",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED", error);
        }
      );
  };
  const handleReceiveRequest = () => {
    console.log("Receive request");
  };
  const handleCancelRequest = () => {
    console.log("Cancel request");
  };
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={"100vw"}
        m={"100px 0 0 0"}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Consulting Staff</Text>
        <Flex direction={"row"} gap={5}>
          <InputGroup w={"40vw"}>
            <InputLeftElement pointerEvents={"none"}>
              <Search2Icon color={"gray.300"} />
            </InputLeftElement>
            <Input name="search" type="text" placeholder="Search..." />
          </InputGroup>
          <Select w={"10vw"}>
            <option value={"request"}>Request</option>
            <option value={"receipt"}>Receipt</option>
          </Select>
        </Flex>

        <TableContainer m={"20px 0 20px 0"} whiteSpace={"wrap"}>
          <Table size={"sm"} colorScheme="blue">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th>No</Th>
                <Th>Valuation Request</Th>
                <Th>Created Date</Th>
                <Th>Status</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Request 1</Td>
                <Td>2021-09-20</Td>
                <Td>Pending</Td>
                <Td>
                  <IconButton
                    aria-label="view valuation request"
                    icon={<ViewIcon />}
                    bgColor={"transparent"}
                    onClick={() => {
                      viewValuationRequest.onOpen();
                      console.log("View valuation request");
                    }}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Modal
        isOpen={viewValuationRequest.isOpen}
        onClose={viewValuationRequest.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Valuation Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={3}>
              <Text>
                <strong>Request ID</strong>: 1561341
              </Text>
              <Text>
                <strong>Request Status</strong>: Pending
              </Text>
              <Text>
                <strong>Customer name</strong>: Lam Tien Hung
              </Text>
              <Text>
                <strong>Customer email</strong>: lamtienhung93@gmail.com
              </Text>
              <Text>
                <strong>Customer request description</strong>:
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rhoncus, justo nec ultrices varius, nisl orci ultricies purus,
                nec ultricies metus orci vel nunc. Nulla facilisi. Nullam non
                malesuada elit. Nulla facilisi. Nullam non malesuada elit. Nulla
                facil
              </Text>
              <Text>
                <strong>Diamond image</strong>:
              </Text>
              <Image
                src="../images/diamond-check.png"
                alt="diamond image"
                w={"100px"}
              />
              <Flex direction={"row"} justifyContent={"space-around"} gap={5}>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    handleReceiveRequest();
                    viewValuationRequest.onClose();
                    sendEmailModal.onOpen();
                  }}
                >
                  Receive Request
                </Button>
                <Button
                  colorScheme="yellow"
                  onClick={() => {
                    confirmCreateReceipt.onOpen();
                  }}
                >
                  Make a receipt
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleCancelRequest();
                    viewValuationRequest.onClose();
                    sendEmailModal.onOpen();
                  }}
                >
                  Cancel Request
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Text>Created Date: 2021-09-20</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={sendEmailModal.isOpen} onClose={sendEmailModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send email to customer </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                from_name: "Lam Tien Hung",
                from_email: "hungltse170216@fpt.edu.vn",
                user_name: "",
                user_email: "",
                message: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleChange, handleBlur, isSubmitting }) => (
                <Form ref={form} onSubmit={sendEmail}>
                  <Flex direction={"column"} gap={5}>
                    <FormControl isRequired>
                      <FormLabel>Customer Name</FormLabel>
                      <Input
                        name="user_name"
                        type="text"
                        placeholder="Customer Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.user_name}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Customer Email</FormLabel>
                      <Input
                        name="user_email"
                        type="email"
                        placeholder="abc@gmail.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.user_email}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Write your message here..."
                        h={"200px"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                    </FormControl>
                    <Input
                      type="hidden"
                      name="from_name"
                      value={values.from_name}
                    />
                    <Input
                      type="hidden"
                      name="from_email"
                      value={values.from_email}
                    />
                    <Center>
                      <Button
                        type="submit"
                        colorScheme="green"
                        leftIcon={<EmailIcon />}
                        isLoading={isSubmitting}
                      >
                        Send Email
                      </Button>
                    </Center>
                  </Flex>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={viewValuationReceipt.isOpen}
        onClose={viewValuationReceipt.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Valuation Receipt</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={3}>
              <Text>
                <strong>Receipt ID</strong>: 1561341
              </Text>
              <Text>
                <strong>Receipt Status</strong>: Completed
              </Text>
              <Text>
                <strong>Customer name</strong>: Lam Tien Hung
              </Text>
              <Text>
                <strong>Customer email</strong>: lamtienhung93@gmail.com
              </Text>
              <Text>
                <strong>Diamond ID</strong>: 262537545
              </Text>
              <Text>
                <strong>Valuation Price</strong>: $100
              </Text>
              <Text>
                <strong>Receipt Description</strong>: Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nulla rhoncus, justo nec
                ultrices varius, nisl orci ultricies purus, nec ultricies metus
                orci vel nunc. Nulla facil
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>Created Date: 2024/05/23</ModalFooter>
        </ModalContent>
      </Modal>
      <ConfirmAlert
        isOpen={confirmCreateReceipt.isOpen}
        onClose={confirmCreateReceipt.onClose}
        cancelRef={cancelRef}
        header={"Create Receipt"}
        body={
          "Are you sure you want to create a receipt for this valuation request?"
        }
        action={"Create"}
        colorScheme={"yellow"}
        onClickFunc={() => {
          viewValuationRequest.onClose();
          viewValuationReceipt.onOpen();
          confirmCreateReceipt.onClose();
        }}
      />
    </>
  );
}
