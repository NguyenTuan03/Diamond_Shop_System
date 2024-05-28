import routes from "../config/Config.js";
import DiamondCalculate from "../pages/calculate/DiamondCalculate.jsx";
import DiamondCheck from "../pages/check/DiamondCheck.jsx";
import DiamondCheckDetails from "../pages/check/DiamondCheckDetails.jsx";
import Detail from "../pages/detail/Detail.jsx";
import DiamondService from "../pages/services/DiamondService.jsx";
import DiamondValuationRequest from "../pages/valuate/DiamondValuationRequest.jsx";
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
import Search from "../pages/Search/Search.jsx";
import ConsultingStaffPage from "../pages/consultingStaff/ConsultingStaffPage.jsx";
import ValuationStaffPage from "../pages/valuationStaff/ValuationStaffPage.jsx";
import DashBoardLayout from "../layout/DashBoardLayout.jsx";
import ConsultingDashBoard from "../pages/dashboard/ConsultingDashBoard.jsx";
import ConsultingAppointment from "../pages/dashboard/ConsultingAppointment.jsx";
import ConsultingNotifications from "../pages/dashboard/ConsultingNotifications.jsx";
import ConsultingPrice from "../pages/dashboard/ConsultingPrice.jsx";
import ConsultingSearch from './../pages/dashboard/ConsultingSearch';
import ConsultingRequest from "../pages/dashboard/ConsultingRequest.jsx";


const ALlRoutes = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: routes.search,
        component: Search,
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

    { path: routes.diamonValuationRequest, component: DiamondValuationRequest },
    {
        path: routes.prices,
        component: Prices,
    },
    {
        path: routes.education,
        component: Education,
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
    {
        path: routes.consultingStaff,
        component: ConsultingStaffPage,
    },
    {
        path: routes.valuationStaff,
        component: ValuationStaffPage,
    },
    //DashBoard => add layout: DashBoardLayout
    {
        path: routes.consulting_dashboard,
        component: ConsultingDashBoard,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dasboardNotification,
        component: ConsultingNotifications,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardPrices,
        component: ConsultingPrice,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardAppoint,
        component: ConsultingAppointment,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardSearch,
        component: ConsultingSearch,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardRequest,
        component: ConsultingRequest,
        layout: DashBoardLayout,
    },
];

export { ALlRoutes };
