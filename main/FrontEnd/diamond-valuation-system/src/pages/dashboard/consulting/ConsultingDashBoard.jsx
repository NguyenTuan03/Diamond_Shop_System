import { Flex, Text, useDisclosure, Button, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ConsultingRequest from "./ConsultingRequest";
import ConsultingStaffTable from "./ConsultingStaffTable";
import {
  fetchProcessRequest,
  checkSealingDate,
  checkFinishDate,
} from "./ConsultingStaffService";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
export default function ConsultingDashBoard() {
  const user = useContext(UserContext);
  const toast = useToast();
  const viewProcessRequest = useDisclosure();
  const [viewSelectProcessRequest, setViewSelectProcessRequest] = useState(0);
  const [processRequest, setProcessRequest] = useState([]);
  const [isProcessRequest, setIsProcessRequest] = useState(false);
  const [isCheckSealingDate, setIsCheckSealingDate] = useState(false);
  const [isCheckFinishDate, setIsCheckFinishDate] = useState(false);

  const pageIndicator = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  for (let i = 1; i <= totalPage; i++) {
    pageIndicator.push(
      <Button
        key={i}
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setCurrentPage(i);
          console.log("current:" + currentPage);
        }}
      >
        {i}
      </Button>
    );
  }
  useEffect(() => {
    console.log("fetching");
    fetchProcessRequest(
      user.userAuth.id,
      setProcessRequest,
      currentPage,
      setTotalPage,
      toast
    ).then(() => {
      checkFinishDate(setIsCheckFinishDate, processRequest, toast).then(() => {
        checkSealingDate(setIsCheckSealingDate, processRequest, toast);
      });
    });
    setIsProcessRequest(true)
  }, []);
  useEffect(() => {
    if (isProcessRequest) {
      fetchProcessRequest(
        user.userAuth.id,
        setProcessRequest,
        currentPage,
        setTotalPage,
        toast
      );
      checkSealingDate(setIsCheckSealingDate, processRequest, toast);
      checkFinishDate(setIsCheckFinishDate, processRequest, toast);
      setIsProcessRequest(false);
    }
  }, [isProcessRequest]);

  useEffect(() => {
    if (isCheckSealingDate) {
      fetchProcessRequest(
        user.userAuth.id,
        setProcessRequest,
        currentPage,
        setTotalPage,
        toast
      );
      setIsCheckSealingDate(false);
    }
  }, [isCheckSealingDate, isProcessRequest]);
  useEffect(() => {
    if (isCheckFinishDate) {
      fetchProcessRequest(
        user.userAuth.id,
        setProcessRequest,
        currentPage,
        setTotalPage,
        toast
      );
      setIsCheckFinishDate(false);
    }
  }, [isCheckFinishDate, isProcessRequest]);
  useEffect(() => {
    fetchProcessRequest(
      user.userAuth.id,
      setProcessRequest,
      currentPage,
      setTotalPage,
      toast
    );
  }, [currentPage]);

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        // h={"70vh"}
        paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: Lâm Tiên Hưng
        </Text>
        <Text fontSize="xl">For Consulting Staff</Text>

        <ConsultingStaffTable
          processRequest={processRequest}
          setViewSelectProcessRequest={setViewSelectProcessRequest}
          viewProcessRequest={viewProcessRequest}
        />
        <Flex direction={"row"} gap={2}>
          {pageIndicator}
        </Flex>
      </Flex>
      <ConsultingRequest
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
