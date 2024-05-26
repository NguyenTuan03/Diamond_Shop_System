import {
    Divider,
    FormErrorMessage,
    FormLabel,
    Input,
    Button,
    Flex,
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    FormHelperText,
    Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Title from "../../components/Title";
import UploadImage from "../../components/UploadImage";
import SendEmailModal from "../../components/SendEmailModal";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { validateSignUp } from "../../utils/ValidateSignUp";
export default function DiamondValuationRequest() {
    const [input, setInput] = useState("");
    const handleInputChange = (e) => setInput(e.target.value);
    const isError = input === "";
    return (
        <>
            <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"100vw"}
                m={"50px 0 0 0"}
            >
                <Title
                    title={"Diamond Valuation Request"}
                    description={
                        "Please fill in the form below to request a diamond valuation."
                    }
                />
                <Divider m={"20px 0 20px 0"} />
                <Center mb={5}>
                    <FormControl flex={"true"}>
                        <FormLabel>Email address 👇</FormLabel>
                        <Input type="email" />
                    </FormControl>
                </Center>
                <Center mt={5} mb={5}>
                    <FormControl>
                        <FormLabel>Let us know your description 👇</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </Center>
                <Formik>
                    <UploadImage />
                </Formik>
            </Flex>
        </>
    );
}
