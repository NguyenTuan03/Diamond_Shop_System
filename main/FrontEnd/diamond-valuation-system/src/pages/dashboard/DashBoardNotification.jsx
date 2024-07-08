import { useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import NotificationToast from "../../components/notification/NotificationToast";
import NotificationCard from "../../components/notification/NotificationCard";

export default function DashBoardNotification() {
  const toast = useToast();
  const user = useContext(UserContext);
  let finishedNotification;
  if (localStorage.getItem("finishedRequests")) {
    try {
      finishedNotification = JSON.parse(
        localStorage.getItem("finishedRequests")
      );
    } catch (e) {
      console.log(e);
    }
  }
  let sealedNotification;
  if (localStorage.getItem("sealedRequests")) {
    try {
      sealedNotification = JSON.parse(localStorage.getItem("sealedRequests"));
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      {finishedNotification &&
        finishedNotification.map(
          (item, index) =>
            (user.userAuth.id === item.customerId ||
              user.userAuth.id === item.consultingStaffId) && (
              <>
                <NotificationCard
                  key={index}
                  type={"finished"}
                  processRequestId={item.processRequestId}
                />
                <div style={{ display: "none" }}>
                  {toast({
                    title: "Request has been finished",
                    description: `Request ID: ${item.processRequestId}`,
                    position: "top-right",
                    render: () => (
                      <NotificationToast
                        type={"finished"}
                        processRequestId={item.processRequestId}
                      />
                    ),
                    duration: 1000,
                    isClosable: true,
                  })}
                </div>
              </>
            )
        )}
      {sealedNotification &&
        sealedNotification.map(
          (item, index) =>
            (user.userAuth.id === item.customerId ||
              user.userAuth.id === item.consultingStaffId) && (
              <>
                <NotificationCard
                  key={index}
                  type={"sealed"}
                  processRequestId={item.processRequestId}
                />
                <div style={{ display: "none" }}>
                  {toast({
                    title: "Request has been sealed",
                    description: `Request ID: ${item.processRequestId}`,
                    position: "top-right",
                    render: () => (
                      <NotificationToast
                        type={"sealed"}
                        processRequestId={item.processRequestId}
                      />
                    ),
                    duration: 1000,
                    isClosable: true,
                  })}
                </div>
              </>
            )
        )}
    </>
  );
}
