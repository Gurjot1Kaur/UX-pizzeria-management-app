/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Unarchive from "@material-ui/icons/Unarchive";
import AddBoxIcon from '@material-ui/icons/AddBox';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import LoginPage from "views/Login/Login.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: LoginPage,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "View Order Status",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Order Analysis",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Edit Menu",
    rtlName: "طباعة",
    icon: MenuBookIcon,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Delivery Tracking",
    rtlName: "الرموز",
    icon: LocationOn,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Order History",
    rtlName: "خرائط",
    icon: BubbleChart,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Create New Account",
    rtlName: "إخطارات",
    icon: AddBoxIcon,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "Employee Look-Up",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Person,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "You are logged in as Manager!",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
