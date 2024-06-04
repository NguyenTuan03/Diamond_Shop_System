import {
  Divider,
  Flex,
  FormControl,
  Center,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Title from "../../components/Title";
import UploadImage from "../../components/UploadImage";
import SendEmailModal from "../../components/SendEmailModal";
import { Formik } from "formik";
export default function DiamondValuationRequest() {
  const bgColor = useColorModeValue("white", "black");

  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"99vw"}
        h={"100vh"}
        bg={bgColor}
      >
        <Title
          title={"Diamond Valuation Request"}
          description={
            "Please fill in the form below to request a diamond valuation."
          }
        />
        <Divider m={"20px 0 20px 0"} />
        <Center mt={5} mb={5}>
          <FormControl>
            <Textarea
              h={"200px"}
              w={"500px"}
              placeholder="Please write your request description here..."
            />
          </FormControl>
        </Center>
        <Formik>
          <UploadImage />
        </Formik>
      </Flex>
    </>
  );
}
