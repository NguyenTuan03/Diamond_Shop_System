import routes from "../config/Config.js";
import Calculate from "../pages/calculate/Calculate.jsx";
import DiamondCheck from "../pages/check/DiamondCheck.jsx";
import DiamondCheckDetails from "../pages/check/DiamondCheckDetails.jsx";
import Detail from "../pages/detail/Detail.jsx";
import Education from "../pages/education/Education.jsx";
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
];

export { ALlRoutes };
