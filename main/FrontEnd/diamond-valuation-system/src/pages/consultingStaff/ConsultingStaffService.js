import axios from "axios";

export const fetchProcessRequest = async (setProcessRequest, toast) => {
  try {
    await axios
      .get("http://localhost:8081/api/process-request/get?staffId=145")
      .then(function (response) {
        setProcessRequest(response.data.content);
        console.log(response.data.content);
        toast({
            title: "Success",
            description: "Data fetched",
            status: "success",
            duration: 3000,
            isClosable: true,
            
        })
      });
  } catch (e) {
    console.log(e);
    toast({
      title: "Error",
      description: "Cannot fetch data",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};

export const handleProcessRequest = async (
  toast,
  type,
  processRequestType,
  consultingStaffId,
  valuationRequestId
) => {
  try {
    await axios
      .post("http://localhost:8081/api/process-request/update", {
        type: type,
        processRequestType: processRequestType,
        consultingStaffId: consultingStaffId,
        valuationRequestId: valuationRequestId,
      })
      .then(function (response) {
        console.log(response);
        toast({
          title: "Success",
          description: response.data,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
  } catch (e) {
    console.log(e);
    toast({
      title: "Error",
      description: "Cannot update data",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};
