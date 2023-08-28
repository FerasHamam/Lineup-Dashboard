import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/patient/components/Banner";
import General from "views/admin/patient/components/General";
import Notifications from "views/admin/patient/components/Notifications";
import Projects from "views/admin/patient/components/Projects";
import Storage from "views/admin/patient/components/Storage";
import Upload from "views/admin/patient/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import Doctors from "./components/Doctors";

export default function DoctorsOverview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid gap={{ base: "20px", xl: "20px" }}>
        <Doctors />
      </Grid>
    </Box>
  );
}
