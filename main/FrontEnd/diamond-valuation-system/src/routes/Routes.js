
import routes from "../config/Config.js";
import Calculate from "../pages/calculate/Calculate.jsx";
import DiamondCheck from "../pages/check/DiamondCheck.jsx";
import Detail from "../pages/detail/Detail.jsx";
import HomePage from "../pages/Home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Logout from "../pages/logout/Logout.jsx";
import Prices from "../pages/prices/Prices.jsx";
import Search from "../pages/Search/Search.jsx";

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
        path: routes.diamondDetail,
        component: Detail,
    },
    {
        path: routes.calculate,
        component: Calculate,
    },
    {
        path: routes.prices,
        component: Prices,
    },
    {
        path: routes.login,
        component: Login,
    },
    {
        path: routes.logout,
        component: Logout,
    },
];

export { ALlRoutes };
