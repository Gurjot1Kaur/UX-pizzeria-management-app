// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import AddBoxIcon from '@material-ui/icons/AddBox';
import GroupIcon from '@material-ui/icons/Group';
import DashboardPage from "views/Dashboard/Dashboard.js";
import LoginPage from "views/Login/Login.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Maps from "views/Maps/Maps.js";


const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "Login",
    icon: GroupIcon,
    component: LoginPage,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/orderstatus",
    name: "View Order Status",
    rtlName: "Order Status",
    icon: AddBoxIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/orderhistory",
    name: "Order History",
    rtlName: "Order History",
    icon: BubbleChart,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/deliverytracking",
    name: "Delivery Tracking",
    rtlName: "Delivery Tracking",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/createaccount",
    name: "Create New Account",
    rtlName: "Create New Account",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/employeelookup",
    name: "Employee Look-Up",
    rtlName: "Employee Look-Up",
    icon: "content_paste",
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
