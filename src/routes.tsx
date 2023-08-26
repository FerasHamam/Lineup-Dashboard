import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdHealthAndSafety,
  MdOutlineLogin,
} from "react-icons/md";
import { LiaTeethSolid } from "react-icons/lia";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
// Auth Imports
import SignIn from "views/auth/signIn/SignIn";
import SignUp from "views/auth/signIn/SignUp";

const routes = [
  {
    name: "mainDashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "cases",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon as={LiaTeethSolid} width="20px" height="20px" color="inherit" />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "doctors",
    layout: "/admin",
    icon: (
      <Icon as={MdHealthAndSafety} width="20px" height="20px" color="inherit" />
    ),
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "patients",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: (
      <Icon as={MdOutlineLogin} width="20px" height="20px" color="inherit" />
    ),
    component: SignIn,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    icon: (
      <Icon as={MdOutlineLogin} width="20px" height="20px" color="inherit" />
    ),
    component: SignUp,
  },
];

export default routes;
