/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";

// Assets
import banner from "assets/img/auth/banner.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactInfo from "views/admin/common/ContactInfo";
import GeneralInfo from "views/admin/common/GeneralInfo";
import { Patient } from "interfaces/PatientInterfaces";
import { getPatient } from "apis/getPatient.api";

export const route = "/admin/patient/patientProfile";

export default function PatientProfile() {
  const [patient, setPatient] = useState<Patient>(undefined);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res.data);
      });
  }, [id]);
  if (!patient) return null;
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.1fr 0.8fr 1.5fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner
          banner={banner}
          avatar={patient?.profilePic}
          name={patient?.name}
          job={patient?.role}
          cases={patient?.cases.length}
        />
        <GeneralInfo
          age={patient.age}
          gender={patient.gender}
          status={patient.status}
          type={patient.type}
        />
        <ContactInfo
          email={patient.email}
          location={patient.location}
          address={patient.address}
          phone={patient.phoneNumber}
        />
      </Grid>
      {/* <Avatars name={patient.name} /> */}
    </Box>
  );
}
