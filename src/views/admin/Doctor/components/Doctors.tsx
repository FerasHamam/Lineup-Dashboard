// Chakra imports
import { Grid, List, Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
// Custom components
import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { DoctorInfo } from "interfaces/DoctorInterfaces";
import DoctorCard from "./DoctorCard";
import { mode } from "@chakra-ui/theme-tools";

export default function Doctors(props: { [x: string]: any }) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "18px 18px 18px 18px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const doctorDummy: DoctorInfo = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    Speciality: "Speciality",
    type: "type",
  };

  const cards: JSX.Element[] = [];
  for (let index = 0; index < 30; index++) {
    cards.push(<DoctorCard doctorInfo={doctorDummy} boxShadow={cardShadow} />);
  }

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
          Doctors
        </Text>
        <List
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          w={"50%"}
        >
          <SearchBar me="5" mt="10px" mb="10px" borderRadius="30px" />
          <SearchBar mt="10px" mb="10px" borderRadius="30px" />
        </List>
      </List>
      <hr />
      <List
        height={"80vh"}
        overflowY={"scroll"}
        padding={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"stretch"}
        justifyContent={"space-between"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "10px",
            borderRadius: "32px",
            backgroundColor: mode(`rgba(0, 0, 0, 0.05)`, `rgb(58, 53, 53)`),
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: mode(`rgba(0, 0, 0, 0.05)`, `rgb(0, 0, 0)`),
          },
        }}
      >
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
          {cards.map((card) => card)}
        </Grid>
      </List>
    </Card>
  );
}
