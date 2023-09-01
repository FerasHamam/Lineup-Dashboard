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
import { DoctorInfo } from "interfaces/DoctorInterfaces";
import DoctorCard from "../doctor/components/DoctorCard";

function Avatars(props: { [x: string]: any }) {
  const { ...rest } = props;

  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const doctorDummy: DoctorInfo = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    Speciality: "Speciality",
    type: "type",
  };

  const cards: JSX.Element[] = [];
  for (let index = 0; index < 5; index++) {
    cards.push(
      <List
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Avatar
          _hover={{ cursor: "pointer" }}
          color="as"
          name="FERAS HAMAM"
          bg="#11047A"
          size="sm"
          w="80px"
          h="80px"
        />
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="1rem"
          mt="10px"
          mb="10px"
        >
          Feras Hamam
        </Text>
      </List>
    );
  }
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest} width={"30vw"}>
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
          (name)'s patients
        </Text>
        <List
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          w={"50%"}
        >
          <SearchBar w={"60%"} me="1" mt="10px" mb="10px" borderRadius="30px" />
        </List>
      </List>
      <hr />
      <List
        height={"30vh"}
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
  );
}

export default Avatars;
