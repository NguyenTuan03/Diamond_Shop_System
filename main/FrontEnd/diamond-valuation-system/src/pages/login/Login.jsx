import React, { useEffect, useState } from "react";
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
    FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../../service/Login";
import SignUp from "../signUp/SignUp";
export default function Login({ signIn, signUp }) {
    const [isLogin, setIsLogin] = useState(false);
    async function fetchApi(username, password) {
        try {
            console.log(username, password);
            const result = await login(username, password);
            console.log(result);
            setIsLogin(true);
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    return (
        <>
            {!isLogin && (
                <Modal isOpen={signIn.isOpen} onClose={signIn.onClose}>
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
                                        fetchApi(
                                            values.username,
                                            values.password
                                        );
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
                                            <Text fontSize={"sm"}>
                                                Forgot password
                                            </Text>
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
                                <Text fontSize={"sm"}>
                                    Don't have an account?{" "}
                                </Text>
                                <Link>
                                    <Text
                                        fontSize={"sm"}
                                        onClick={() => {
                                            signUp.onOpen();
                                            signIn.onClose();
                                        }}
                                    >
                                        Sign up
                                    </Text>
                                </Link>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
            <SignUp signUp={signUp}/>
        </>
    );
}
