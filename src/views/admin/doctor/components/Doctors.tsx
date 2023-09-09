// Chakra imports
import {
  Grid,
  List,
  Spinner,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { getDoctors } from "apis/getDoctors.api";

// Custom components
import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { Doctor } from "interfaces/DoctorInterfaces";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import DoctorCard from "./DoctorCard";
enum DoctorsOptions {
  ALL = "All",
  CONSULTANT = "Consultant",
  NON_CONSULTANT = "Non Consultant",
}

export default function Doctors(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [selectedDoctorOption, setSelectedDoctorOption] =
    useState<DoctorsOptions>(DoctorsOptions.ALL);
  const [loader, setLoader] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const intl = useIntl();
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  useEffect(() => {
    getDoctors().then((res) => {
      setDoctors(res.data);
      setLoader(false);
    });
  }, []);

  useEffect(() => {
    const loweredSearch = search.toLowerCase();
    console.log(loweredSearch);
    if (doctors) {
      setFilteredDoctors(
        doctors.filter((doctor) => {
          let isDoctorIncluded: boolean = false;
          switch (selectedDoctorOption) {
            case DoctorsOptions.CONSULTANT:
              isDoctorIncluded = doctor.isConsultant;
              break;
            case DoctorsOptions.NON_CONSULTANT:
              isDoctorIncluded = !doctor.isConsultant;
              break;
            default:
              isDoctorIncluded = true;
          }
          return (
            (doctor.name.toLowerCase().includes(loweredSearch) ||
              doctor.address.toLowerCase().includes(loweredSearch) ||
              doctor.location.toLowerCase().includes(loweredSearch) ||
              doctor.email.toLowerCase().includes(loweredSearch)) &&
            isDoctorIncluded
          );
        })
      );
      return;
    }
    setFilteredDoctors([]);
  }, [doctors, search, selectedDoctorOption]);

  const onChangeDoctorOptionHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDoctorOption(e.target.value as DoctorsOptions);
  };

  const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.value) {
      setSearch(e.target.value);
      return;
    }
    setSearch("");
  };

  const Loader = useMemo<JSX.Element>(() => {
    if (loader) {
      return (
        <>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="navy.500"
            size="xl"
          />
        </>
      );
    }
    return <></>;
  }, [loader]);

  return (
    <>
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
            {intl.formatMessage({ id: "doctors" })}
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
              value={selectedDoctorOption}
              onChange={onChangeDoctorOptionHandler}
            >
              <option value={DoctorsOptions.ALL}>{DoctorsOptions.ALL}</option>
              <option value={DoctorsOptions.CONSULTANT}>
                {DoctorsOptions.CONSULTANT}
              </option>
              <option value={DoctorsOptions.NON_CONSULTANT}>
                {DoctorsOptions.NON_CONSULTANT}
              </option>
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
          height={"80vh"}
          overflowY={"scroll"}
          padding={"1rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={
            doctors && doctors.length > 0 && !loader ? "stretch" : "center"
          }
          justifyContent={
            doctors && doctors.length > 0 && !loader
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
          {!loader && doctors.length === 0 && (
            <>
              <Text
                color={textColorPrimary}
                fontWeight="bold"
                fontSize="4xl"
                mt="10px"
                mb="10px"
              >
                {intl.formatMessage({ id: "doctors.noDoctors" })}
              </Text>
            </>
          )}
          {Loader}
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
              doctors &&
              filteredDoctors.map((doctor, index) => {
                return <DoctorCard doctor={doctor} />;
              })}
          </Grid>
        </List>
      </Card>
    </>
  );
}
