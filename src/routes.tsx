import { Icon, layout } from "@chakra-ui/react";
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
import DoctorsOverview from "views/admin/doctor";
import PatientsOverview from "views/admin/patient";
import DoctorProfile from "views/admin/doctor/components/DoctorProfile";
import { route as DoctorProfileRoute } from "./views/admin/doctor/components/DoctorProfile";
import PatientProfile, {
  route as PateintProfileRoute,
} from "./views/admin/patient/components/PatientProfile";

const routes = [
  {
    name: "mainDashboard",
    layout: "/admin",
    path: `/admin/default`,
    isMain: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "cases",
    layout: "/admin",
    path: `/admin/nft-marketplace`,
    isMain: true,
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
    isMain: true,
    path: `/admin/doctors`,
    component: DoctorsOverview,
  },
  {
    name: "patients",
    layout: "/admin",
    path: `/admin/patients`,
    isMain: true,
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: PatientsOverview,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: `/auth/sign-in`,
    isMain: false,
    icon: (
      <Icon as={MdOutlineLogin} width="20px" height="20px" color="inherit" />
    ),
    component: SignIn,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: `/admin/sign-up`,
    isMain: false,
    icon: (
      <Icon as={MdOutlineLogin} width="20px" height="20px" color="inherit" />
    ),
    component: SignUp,
  },
  {
    name: "Doctor Profile",
    layout: "/admin",
    path: `${DoctorProfileRoute}/:id`,
    isMain: false,
    icon: (
      <Icon as={MdOutlineLogin} width="20px" height="20px" color="inherit" />
    ),
    component: DoctorProfile,
  },
  {
    name: "Patient Profile",
    layout: "/admin",
    path: `${PateintProfileRoute}/:id`,
    isMain: false,
    icon: (
      <Icon as={MdOutlineLogin} width="20px" height="20px" color="inherit" />
    ),
    component: PatientProfile,
  },
];

export default routes;
