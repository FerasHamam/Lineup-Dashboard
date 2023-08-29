import { Box, Grid } from "@chakra-ui/react";

import Patients from "./components/Patients";

export default function PatientsOverview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid gap={{ base: "20px", xl: "20px" }}>
        <Patients />
      </Grid>
    </Box>
  );
}
