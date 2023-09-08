// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { Doctor } from "interfaces/DoctorInterfaces";
// Assets
import { MdArrowForward } from "react-icons/md";
import { generatePath, NavLink } from "react-router-dom";

import profileImage from "../../../../assets/img/avatars/avatar6.png";
import { route } from "./DoctorProfile";

export default function DoctorCard(props: {
  doctor: Doctor;
  [x: string]: any;
}) {
  const { doctor, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  const shadow = useColorModeValue("4px 4px rgba(112, 144, 176, 0.12)", "none");

  return (
    <NavLink to={{ pathname: `${route}/${doctor.id}` }}>
      <Card bg={bg} {...rest} p="14px" shadow={shadow}>
        <Flex align="center" direction={{ base: "column", md: "row" }}>
          <Avatar
            mx="auto"
            src={doctor.profilePic && doctor.profilePic}
            name={!doctor.profilePic && doctor.name && doctor.name}
            h="87px"
            w="87px"
            borderColor={"transparent"}
          />
          <Box mt={{ base: "10px", md: "0" }}>
            <Text
              color={textColorPrimary}
              fontWeight="500"
              fontSize="md"
              mb="4px"
            >
              {doctor.name}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              {doctor.email}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              {`${doctor.location}, ${doctor.address}`}
            </Text>
          </Box>
          <Link
            href={"#"}
            variant="no-hover"
            me="16px"
            ms="auto"
            p="0px !important"
          >
            <Icon
              as={MdArrowForward}
              color="secondaryGray.500"
              h="18px"
              w="18px"
            />
          </Link>
        </Flex>
      </Card>
    </NavLink>
  );
}
