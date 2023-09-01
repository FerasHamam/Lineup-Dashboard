// Chakra imports
import { Grid, List, Select, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { DoctorInfo } from "interfaces/DoctorInterfaces";
import { useIntl } from "react-intl";
import Avatars from "views/admin/common/Avatars";
import DoctorCard from "./DoctorCard";

export default function Doctors(props: { [x: string]: any }) {
  const { ...rest } = props;
  const intl = useIntl();
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
    cards.push(
      <DoctorCard doctorInfo={doctorDummy} boxShadow={cardShadow} id={index} />
    );
  }

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
            <Select w={"50%"} me="5" mt="10px" mb="10px" borderRadius="30px" />
            <SearchBar
              w={"50%"}
              me="5"
              mt="10px"
              mb="10px"
              borderRadius="30px"
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
          alignItems={"stretch"}
          justifyContent={"space-between"}
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
    </>
  );
}
