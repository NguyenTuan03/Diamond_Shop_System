import React, { useContext } from "react";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const user = useContext(UserContext);
  const navigate=useNavigate();
  if(localStorage.getItem("user")===null){
    navigate(-1)
  }
  return (
    <>
        {/* {(user.userAuth.roleid === 1 && <AdminPage />) ||
          (user.userAuth.roleid === 2 && <ManagerDashboard />) ||
          (user.userAuth.roleid === 3 && <ConsultingStaffDashboard />) ||
          (user.userAuth.roleid === 4 && <ValuationStaffDashboard />) ||
          (user.userAuth.roleid === 5 && <CustomerDashboard />)} */}
    </>
  );
}
