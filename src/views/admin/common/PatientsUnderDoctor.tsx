import {
  List,
  useColorModeValue,
  Text,
  Grid,
  Avatar,
  Select,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { Doctor } from "interfaces/DoctorInterfaces";
import { Patient } from "interfaces/PatientInterfaces";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";

import { route as patientRoute } from "../patient/components/PatientProfile";

function PatientsUnderDoctor(props: {
  name: string;
  patients: Patient[];
  [x: string]: any;
}) {
  const { name, patients, ...rest } = props;
  const intl = useIntl();
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cards: JSX.Element[] = [];
  for (let index = 0; index < 5; index++) {
    cards.push();
  }
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest} width={"100%"}>
      <List
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        mb="20px"
      >
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mt="10px"
          mb="10px"
        >
          {name}'s {intl.formatMessage({ id: "patients" })}
        </Text>
      </List>
      <hr />
      <List
        height={"30vh"}
        overflowY={"scroll"}
        padding={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={patients && patients.length > 0 ? "stretch" : "center"}
        justifyContent={
          patients && patients.length > 0 ? "space-between" : "center"
        }
        mt={"5"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "10px",
            borderRadius: "32px",
            backgroundColor: "#a8bbbf",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(105, 96, 110, 0.425)`,
            borderRadius: "32px",
          },
        }}
      >
        {patients && patients.length === 0 && (
          <>
            <Text
              color={textColorPrimary}
              fontWeight="bold"
              fontSize="2xl"
              mt="10px"
              mb="10px"
            >
              {intl.formatMessage({ id: "patients.noPatients" })} for {name}
            </Text>
          </>
        )}
        <Grid
          templateColumns={{
            md: "repeat(3, 1fr)",
            base: "repeat(2, 1fr)",
          }}
          templateRows={{
            base: "1fr",
          }}
          gap={{ base: "20px", xl: "20px" }}
        >
          {patients &&
            patients.map((patient) => {
              return (
                <List
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <NavLink
                    to={{
                      pathname: `${patientRoute}/${patient.id}`,
                    }}
                  >
                    <Avatar
                      _hover={{ cursor: "pointer" }}
                      color={textColorPrimary}
                      textColor={textColorPrimary}
                      name="FERAS HAMAM"
                      src={patient.profilePic}
                      bg="#58676b"
                      size="sm"
                      w="80px"
                      h="80px"
                    />
                  </NavLink>
                  <Text
                    color={textColorPrimary}
                    fontWeight="bold"
                    fontSize="1rem"
                    mt="10px"
                    mb="10px"
                  >
                    {patient.name}
                  </Text>
                </List>
              );
            })}
        </Grid>
      </List>
    </Card>
  );
}

export default PatientsUnderDoctor;
