import React, { useContext } from "react";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import AdminPage from "../admin/AdminPage";
import ManagerPage from "./manager/ManagerPage";
import ValuationStaffPage from "../valuationStaff/ValuationStaffPage";
import ConsultingStaffDashboard from "./consulting/ConsultingStaffDashboard";
import CustomerDashboard from "./customer/CustomerDashboard";

export default function DashBoard() {
  const user = useContext(UserContext);
  return (
    <>
      {(user.userAuth.roleid === 1 && <AdminPage />) ||
        (user.userAuth.roleid === 2 && <ManagerPage />) ||
        (user.userAuth.roleid === 3 && <ConsultingStaffDashboard />) ||
        (user.userAuth.roleid === 4 && <ValuationStaffPage />) ||
        (user.userAuth.roleid === 5 && <CustomerDashboard />)}
    </>
  );
}
