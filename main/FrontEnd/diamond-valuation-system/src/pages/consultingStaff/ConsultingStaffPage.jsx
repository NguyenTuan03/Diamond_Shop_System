import {
  Flex,
  Text,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import ConsultingStaffViewProcessRequest from "./ConsultingStaffViewProcessRequest";
import ConsultingStaffTable from "./ConsultingStaffTable";
import { fetchProcessRequest } from "./ConsultingStaffService";
export default function ConsultingStaffPage() {
  const toast = useToast();
  const viewProcessRequest = useDisclosure();
  const [viewSelectProcessRequest, setViewSelectProcessRequest] = useState(0);
  const [processRequest, setProcessRequest] = useState([]);
  const [isProcessRequest, setIsProcessRequest] = useState(false);
  useEffect(() => {
    fetchProcessRequest(setProcessRequest, toast);
  }, []);
  useEffect(() => {
    if (isProcessRequest) {
      fetchProcessRequest(setProcessRequest, toast);
      setIsProcessRequest(false);
    }
  }, [isProcessRequest]);
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        m={"100px 0 0 0"}
        paddingTop={10}
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
          <Select
            id="select"
            w={"10vw"}
            onChange={() => {
              // setSelectData(document.getElementById("select").value);
              // console.log(selectData);
            }}
            onClick={() => {
              console.log(processRequest);
            }}
          >
            <option value={"request"}>Request</option>
            <option value={"receipt"}>Receipt</option>
            <option value={"result"}>Result</option>
          </Select>
        </Flex>
        <ConsultingStaffTable
          processRequest={processRequest}
          setViewSelectProcessRequest={setViewSelectProcessRequest}
          viewProcessRequest={viewProcessRequest}
        />
      </Flex>
      <ConsultingStaffViewProcessRequest
        isOpen={viewProcessRequest.isOpen}
        onClose={viewProcessRequest.onClose}
        processRequest={processRequest[viewSelectProcessRequest]}
        setIsProcessRequest={setIsProcessRequest}
        viewProcessRequest={viewProcessRequest}
        toast={toast}
      />
    </>
  );
}
