import routes from "../config/Config.js";
import DiamondCalculate from "../pages/calculate/DiamondCalculate.jsx";
import DiamondCheck from "../pages/check/DiamondCheck.jsx";
import DiamondCheckDetails from "../pages/check/DiamondCheckDetails.jsx";
import Detail from "../pages/detail/Detail.jsx";
import DiamondService from "../pages/services/DiamondService.jsx";
import DiamondValuationRequest from "../pages/valuate/DiamondValuationRequest.jsx";
import EducationCarat from "../pages/education/EducationCarat.jsx";
import EducationCertificate from "../pages/education/EducationCertificate.jsx";
import EducationClarity from "../pages/education/EducationClarity.jsx";
import EducationColor from "../pages/education/EducationColor.jsx";
import EducationCut from "../pages/education/EducationCut.jsx";
import EducationShape from "../pages/education/EducationShape.jsx";
import HomePage from "../pages/Home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Logout from "../pages/logout/Logout.jsx";
import Prices from "../pages/prices/Prices.jsx";
import Error from "../pages/error/Error.jsx";
import DashBoardLayout from "../layout/DashBoardLayout.jsx";
import DashBoard from "../pages/dashboard/DashBoard.jsx";
import DashBoardNotification from "./../pages/dashboard/DashBoardNotification";
import DashBoardPrices from "./../pages/dashboard/DashBoardPrices";
import DashBoardAppoint from "./../pages/dashboard/DashBoardAppoint";
import DashBoardSearch from "./../pages/dashboard/DashBoardSearch";
import DashBoardRequest from "./../pages/dashboard/DashBoardRequest";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";
import DashBoardSetting from "../pages/dashboard/DashBoardSetting.jsx";
import DashBoardTransaction from "../pages/dashboard/DashBoardTransaction.jsx";
import PendingRequestTable from "../pages/dashboard/table/PendingRequestTable.jsx";
import { layout } from "@chakra-ui/react";
import ProcessRequestTable from "../pages/dashboard/table/ProcessRequestTable.jsx";
import SealingLetterTable from "../pages/dashboard/table/SealingLetterTable.jsx";
import CommitmentTable from "../pages/dashboard/table/CommitmentTable.jsx";
import ValuationStaffDashboard from "../pages/dashboard/valuation/ValuationStaffDashBoard.jsx";
import AdminPage from "../pages/admin/AdminPage.jsx";
import ServiceTable from "../pages/dashboard/table/ServiceTable.jsx";
import FAQs from "../pages/FAQ/FAQs.jsx";
import Activate from "../pages/signUp/Activate.jsx";

const ALlRoutes = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: routes.diamondCheck,
        component: DiamondCheck,
    },
    {
        path: routes.diamondCheckDetails,
        component: DiamondCheckDetails,
    },
    {
        path: routes.diamondDetail,
        component: Detail,
    },

    {
        path: routes.diamondCalculate,
        component: DiamondCalculate,
    },
    {
        path: routes.diamondService,
        component: DiamondService,
    },

  {
    path: routes.educationShape,
    component: EducationShape,
  },
  {
    path: routes.educationCarat,
    component: EducationCarat,
  },
  {
    path: routes.educationColor,
    component: EducationColor,
  },
  {
    path: routes.educationCut,
    component: EducationCut,
  },
  {
    path: routes.educationClarity,
    component: EducationClarity,
  },
  {
    path: routes.login,
    component: Login,
  },
  {
    path: routes.logout,
    component: Logout,
  },
  {
    path: routes.error,
    component: Error,
    layout: null,
  },
  {
    path: routes.aboutUs,
    component: AboutUs,
  },
  {
    path: routes.FAQs,
    component: FAQs,
  },
    {
        path: routes.educationShape,
        component: EducationShape,
    },
    {
        path: routes.educationCarat,
        component: EducationCarat,
    },
    {
        path: routes.educationColor,
        component: EducationColor,
    },
    {
        path: routes.educationCut,
        component: EducationCut,
    },
    {
        path: routes.educationClarity,
        component: EducationClarity,
    },
    {
        path: routes.login,
        component: Login,
    },
    {
        path: routes.logout,
        component: Logout,
    },
    {
        path: routes.error,
        component: Error,
        layout: null,
    },
    {
        path: routes.aboutUs,
        component: AboutUs,
    },

    {
        path: routes.diamondValuationRequest,
        component: DiamondValuationRequest,
    },
    {
        path: routes.prices,
        component: Prices,
    },
    {
        path: routes.educationCertificate,
        component: EducationCertificate,
    },

    {
        path: routes.educationShape,
        component: EducationShape,
    },
    {
        path: routes.educationCarat,
        component: EducationCarat,
    },
    {
        path: routes.educationColor,
        component: EducationColor,
    },
    {
        path: routes.educationCut,
        component: EducationCut,
    },
    {
        path: routes.educationClarity,
        component: EducationClarity,
    },
    {
        path: routes.login,
        component: Login,
    },
    {
        path: routes.logout,
        component: Logout,
    },
    // Customer
    {
        path: routes.dashboard,
        component: DashBoard,
        layout: DashBoardLayout,
    },
    {
        path: routes.dasboardNotification,
        component: DashBoardNotification,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardPrices,
        component: DashBoardPrices,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardAppoint,
        component: DashBoardAppoint,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardTransaction,
        component: DashBoardTransaction,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardSearch,
        component: DashBoardSearch,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardRequest,
        component: DashBoardRequest,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardSetting,
        component: DashBoardSetting,
    },
    {
        path: routes.manageAccount,
        component: AdminPage,
        layout: DashBoardLayout,
    },
    {
        path: routes.pendingRequest,
        component: PendingRequestTable,
        layout: DashBoardLayout,
    },
    {
        path: routes.processRequest,
        component: ProcessRequestTable,
        layout: DashBoardLayout,
    },
    {
        path: routes.sealingLetter,
        component: SealingLetterTable,
        layout: DashBoardLayout,
    },
    {
        path: routes.commitment,
        component: CommitmentTable,
        layout: DashBoardLayout,
    },
    {
        path: routes.valuationDiamond,
        component: ValuationStaffDashboard,
        layout: DashBoardLayout,
    },
    {
        path: routes.manageService,
        component: ServiceTable,
        layout: DashBoardLayout,
    },
    {
        path: routes.activate,
        component: Activate,
        layout: null,
    },
];

export { ALlRoutes };
