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
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ViewIcon } from "@chakra-ui/icons";
import { Form, Formik } from "formik";

export default function ConsultingStaffPage() {
  const viewValuationRequest = useDisclosure();
  const sendEmailModal = useDisclosure();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wdhkh8r", "template_lmqu9ve", form.current, {
        publicKey: "-aLUeyXnXZMWF6yqM",
      })
      .then(
        () => {
          console.log("SUCCESS");
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
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lam Tien Hung
        </Text>
        <TableContainer m={"20px 0 20px 0"} whiteSpace={"wrap"}>
          <Table size={"sm"} colorScheme="blue">
            <Thead bgColor={"blue.400"}>
              <Th>No</Th>
              <Th>Valuation Request</Th>
              <Th>Created Date</Th>
              <Th>Status</Th>
              <Th>View</Th>
            </Thead>
            <Tbody>
              <Th>1</Th>
              <Th>Request 1</Th>
              <Th>2021-09-20</Th>
              <Th>Pending</Th>
              <Th>
                <IconButton
                  aria-label="view valuation request"
                  icon={<ViewIcon />}
                  bgColor={"transparent"}
                  onClick={() => {
                    viewValuationRequest.onOpen();
                    console.log("View valuation request");
                  }}
                />
              </Th>
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
              <Flex direction={"row"} justifyContent={"space-around"}>
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
                user_email: "abc@test.com",
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.user_email}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Input
                        name="message"
                        type="text"
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
          <ModalFooter> </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
