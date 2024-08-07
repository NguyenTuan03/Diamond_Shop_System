import {
  Input,
  InputGroup,
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
  InputLeftAddon,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { Form, Formik } from "formik";
import { validateSignUp } from "../../utils/ValidateSignUp";
import { createAccount } from "./AdminServices";
export default function AdminCreateUsers({
  setIsAdded,
  isOpen,
  onClose,
  createUser,
  toast,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
              console.log(values);
              createAccount(
                values.role,
                values.username,
                values.password,
                values.fullName,
                values.email,
                values.phoneNumber,
                values.address,
                toast
              )
                .then(() => {
                  setIsAdded(true);
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
                    Create
                  </Button>
                </Center>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
