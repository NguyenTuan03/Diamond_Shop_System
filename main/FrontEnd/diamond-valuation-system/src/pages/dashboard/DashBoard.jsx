import React, { useContext, useEffect } from "react";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const user = useContext(UserContext);
  return (
    <>
    </>
  );
}
