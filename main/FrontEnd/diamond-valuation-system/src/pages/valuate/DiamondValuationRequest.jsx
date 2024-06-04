import {
    Divider,
    FormLabel,
    Input,
    Flex,
    FormControl,
    Center,
    Textarea,
    FormHelperText,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Title from "../../components/Title";
import UploadImage from "../../components/UploadImage";
import SendEmailModal from "../../components/SendEmailModal";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
export default function DiamondValuationRequest() {
    const [input, setInput] = useState("");    
    const serviceId = useParams();    
    return (
        <>
            <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"99vw"}
                m={"50px 0 0 0"}
            >
                <Title
                    title={"Diamond Valuation Request"}
                    description={
                        "Please fill in the form below to request a diamond valuation."
                    }
                />
                <Divider m={"20px 0 20px 0"} />
                <FormControl w={"400px"}>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" placeholder="Please write your address" />
                </FormControl>
                <Center mt={5} mb={5}>
                    <FormControl>
                        <Textarea
                            h={"200px"}
                            w={"500px"}
                            placeholder="Please write your request description here..."
                            onChange={e => setInput(e.target.value)}
                        />
                    </FormControl>
                </Center>
                <Formik>
                    <UploadImage service={+serviceId.id} description={input} />
                </Formik>
            </Flex>
        </>
    );
}
