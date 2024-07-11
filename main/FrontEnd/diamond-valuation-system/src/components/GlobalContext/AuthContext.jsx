import React, { createContext, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const UserContext = createContext();

export default function AuthContext({ children }) {
  const [userAuth, setUserAuth] = useState(
    JSON.parse(localStorage.getItem("user")) ?? ""
  );
  const toast = useToast();

  const deleteAccount = async () => {
    console.log(userAuth.id);
    try {
      await axios
        .delete(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/account/delete?id=${
            userAuth.id
          }`,
          {
            headers: {
              Authorization: `Bearer ${userAuth.token}`,
            },
          }
        )
        .then(function (response) {
          if (response.status === 200) {
            localStorage.removeItem("user");
            setUserAuth("");
            toast({
              title: "Account deleted.",
              description: "Your account has been deleted successfully.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        });
    } catch (err) {
      toast({
        title: "Failed to delete account.",
        description: "An error occurred while deleting your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }
  };
  const loginUser = (userData) => {
    setUserAuth(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logoutUser = () => {
    setUser({});
    localStorage.removeItem("user");
  };
  const value = {
    userAuth,
    loginUser,
    logoutUser,
    deleteAccount,
  };

  return (
    <div>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </div>
  );
}
