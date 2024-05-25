import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { login } from "../../service/Login";
export default function Login({ signIn, signUp }) {
    const handleSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        console.log(token);
        localStorage.setItem("accessToken", token);

        sendTokenToServer(token);
    };

    const sendTokenToServer = async (token) => {
        try {
            const response = await login(token);
            console.log("Success:", response);
        } catch (error) {
            console.log("Err: ",error);
        }
    };
    return (
        <>
            <Modal isOpen={signIn.isOpen} onClose={signIn.onClose}>
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
                            <GoogleOAuthProvider clientId="28655865996-ijon4ep7kgchh44ph9f7ssuhlkomfh87.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={handleSuccess}
                                    onError={(res) => {
                                        console.log("Login Failed", res);
                                    }}
                                    // useOneTap
                                    auto_select
                                />
                            </GoogleOAuthProvider>
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
            <Modal isOpen={signUp.isOpen} onClose={signUp.onClose}>
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
