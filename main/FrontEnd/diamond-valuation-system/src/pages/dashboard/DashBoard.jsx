import React, { useContext } from "react";
import ConsultingDashBoard from "./consulting/ConsultingDashBoard";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import AdminPage from "../admin/AdminPage";
import ManagerPage from "../manager/ManagerPage";
import ValuationStaffPage from "../valuationStaff/ValuationStaffPage";
import CustomerPage from "../customer/CustomerPage";

export default function DashBoard() {
  const user = useContext(UserContext);
  return (
    <>
      {(user.userAuth.roleid === 1 && <AdminPage />) ||
        (user.userAuth.roleid === 2 && <ManagerPage />) ||
        (user.userAuth.roleid === 3 && <ConsultingDashBoard />) ||
        (user.userAuth.roleid === 4 && <ValuationStaffPage />) ||
        (user.userAuth.roleid === 5 && <CustomerPage/>)
      }
    </>
  );
}
