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
import { Doctor } from "interfaces/DoctorInterfaces";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoctor } from "apis/getDoctor.api";
import ContactInfo from "views/admin/common/ContactInfo";
import GeneralInfo from "views/admin/common/GeneralInfo";
import PatientsUnderDoctor from "views/admin/common/PatientsUnderDoctor";

export const route = "/admin/doctor/doctorProfile";

export default function DoctorProfile() {
  const [doctor, setDoctor] = useState<Doctor>(undefined);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id)
      getDoctor(id).then((res) => {
        setDoctor(res.data);
      });
  }, [id]);
  if (!doctor) return null;
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
          avatar={doctor?.profilePic}
          name={doctor?.name}
          job={doctor?.role}
          patients={doctor?.patients.length}
          cases={doctor?.cases.length}
        />
        <GeneralInfo
          age={doctor.age}
          gender={doctor.gender}
          isConsultant={doctor.isConsultant}
          status={doctor.status}
          type={doctor.type}
        />
        <ContactInfo
          email={doctor.email}
          location={doctor.location}
          address={doctor.address}
          phone={doctor.phoneNumber}
        />
      </Grid>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <PatientsUnderDoctor name={doctor.name} patients={doctor.patients} />
      </Grid>
    </Box>
  );
}
