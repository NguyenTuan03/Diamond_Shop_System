import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setTimeout(() => {
      navigate('/', { replace: true });
      window.location.reload();
  }, 500);
  };
  return (
    <>
    <ToastContainer/>
    <Button colorScheme="red" onClick={handleLogout}>
      Logout
    </Button>
    </>
  );
}
