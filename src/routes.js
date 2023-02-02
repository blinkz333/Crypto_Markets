/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DashboardPage from "views/Dashboard/Dashboard.js";
import CoinsPage from "views/market/coins.js"
import { useParams } from "react-router-dom";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/:currency",
    name: "Market Price",
    icon: CurrencyBitcoinIcon,
    component: ({ match }) => {
      const { currency } = useParams();
      return <CoinsPage currency={currency} />;
    },
    layout: "/market",
  },
  
];

export default dashboardRoutes;
