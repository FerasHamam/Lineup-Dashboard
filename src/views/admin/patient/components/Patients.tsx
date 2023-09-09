// Chakra imports
import { Grid, List, Select, Text, useColorModeValue } from "@chakra-ui/react";
import { getPatients } from "apis/getPatients.api";

// Custom components
import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import {
  Patient,
  PatientStatus,
  PatientType,
} from "interfaces/PatientInterfaces";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import HumanCard from "views/admin/common/HumanCard";
import { Loader } from "views/admin/common/Loader";

export default function Patients(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [selectedPatientStatus, setSelectedPatientStatus] =
    useState<PatientStatus>(PatientStatus.ALL);
  const [selectedPatientType, setSelectedPatientType] = useState<PatientType>(
    PatientType.ALL
  );
  const [loader, setLoader] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const intl = useIntl();
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "18px 18px 18px 18px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  useEffect(() => {
    getPatients()
      .then((res) => {
        setPatients(res.data);
        setLoader(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const loweredSearch = search.toLowerCase();
    if (patients) {
      setFilteredPatients(
        patients.filter((patient) => {
          const patientStatusValue = () =>
            Object.values(PatientStatus)[
              Object.keys(PatientStatus).findIndex((s) => s === patient.status)
            ];
          const patientTypeValue = () =>
            Object.values(PatientType)[
              Object.keys(PatientType).findIndex((t) => t === patient.type)
            ];

          return (
            (patient.name.toLowerCase().includes(loweredSearch) ||
              patient.address.toLowerCase().includes(loweredSearch) ||
              patient.location.toLowerCase().includes(loweredSearch) ||
              patient.email.toLowerCase().includes(loweredSearch)) &&
            (selectedPatientStatus === PatientStatus.ALL ||
              selectedPatientStatus === patientStatusValue()) &&
            (selectedPatientType === PatientType.ALL ||
              selectedPatientType === patientTypeValue())
          );
        })
      );
      return;
    }
    setFilteredPatients([]);
  }, [search, patients, selectedPatientStatus, selectedPatientType]);

  const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.value) {
      setSearch(e.target.value);
      return;
    }
    setSearch("");
  };

  const onChangePatientStatusHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPatientStatus(e.target.value as PatientStatus);
  };

  const onChangePatientTypeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPatientType(e.target.value as PatientType);
  };

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
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
          {intl.formatMessage({ id: "patients" })}
        </Text>
        <List
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          w={"50%"}
        >
          <Select
            w={"50%"}
            me="5"
            mt="10px"
            mb="10px"
            borderRadius="30px"
            value={selectedPatientStatus}
            onChange={onChangePatientStatusHandler}
          >
            {Object.values(PatientStatus).map((key) => {
              return (
                <option value={key} className="bg-green-200 text-green-700">
                  {key}
                </option>
              );
            })}
          </Select>
          <Select
            w={"50%"}
            me="5"
            mt="10px"
            mb="10px"
            borderRadius="30px"
            value={selectedPatientType}
            onChange={onChangePatientTypeHandler}
          >
            {Object.values(PatientType).map((key) => {
              return (
                <option value={key} className="bg-green-200 text-green-700">
                  {key}
                </option>
              );
            })}
          </Select>
          <SearchBar
            w={"50%"}
            me="5"
            mt="10px"
            mb="10px"
            borderRadius="30px"
            onChange={onChangeSearchHandler}
          />
        </List>
      </List>
      <hr />
      <List
        mt={5}
        height={"80vh"}
        overflowY={"scroll"}
        padding={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={
          patients && patients.length > 0 && !loader ? "stretch" : "center"
        }
        justifyContent={
          patients && patients.length > 0 && !loader
            ? "space-between"
            : "center"
        }
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
        {loader && <Loader />}
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
          {!loader &&
            patients &&
            filteredPatients.map((patient, index) => {
              return <HumanCard human={patient} />;
            })}
        </Grid>
      </List>
    </Card>
  );
}
