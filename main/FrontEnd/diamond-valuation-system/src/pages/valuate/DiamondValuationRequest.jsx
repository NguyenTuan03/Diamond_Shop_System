import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Title from "../../components/Title";
import UploadImage from "../../components/UploadImage";
import { Formik } from "formik";

export default function DiamondValuationRequest() {
  return (
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
      <Formik>
        <UploadImage />
      </Formik>
    </Flex>
  );
}
