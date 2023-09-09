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
import {
  Patient,
  PatientStatus,
  PatientType,
} from "interfaces/PatientInterfaces";
// Assets
import { MdArrowForward } from "react-icons/md";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";

import { route as doctorRoute } from "../doctor/components/DoctorProfile";
import { route as patientRoute } from "../patient/components/PatientProfile";

function isDoctor(obj: Doctor): obj is Doctor {
  return obj && obj.role && obj.role === "DOCTOR";
}

function isPatient(obj: Patient): obj is Patient {
  return obj && obj.role && obj.role === "PATIENT";
}

export default function HumanCard(props: {
  human: Doctor | Patient;
  [x: string]: any;
}) {
  const { human, ...rest } = props;
  const intl = useIntl();
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  const shadow = useColorModeValue("4px 4px rgba(112, 144, 176, 0.12)", "none");

  return (
    <NavLink
      to={{
        pathname: `${isDoctor(human as Doctor) ? doctorRoute : patientRoute}/${
          human.id
        }`,
      }}
    >
      <Card bg={bg} {...rest} p="14px" shadow={shadow}>
        <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
          <Avatar
            mx="auto"
            src={human.profilePic && human.profilePic}
            name={!human.profilePic && human.name && human.name}
            h="80px"
            w="80px"
          />
          <Box w={"70%"} m={{ base: "10px", md: "10px" }}>
            <Text
              color={textColorPrimary}
              fontWeight="500"
              fontSize="lg"
              mb="4px"
            >
              {human.name}
            </Text>
            <Text
              color={textColorPrimary}
              fontWeight="500"
              fontSize="sm"
              me="4px"
            >
              {isDoctor(human as Doctor) &&
                (human as Doctor).isConsultant &&
                intl.formatMessage({ id: "consultant" })}
              {isDoctor(human as Doctor) &&
                !(human as Doctor).isConsultant &&
                intl.formatMessage({ id: "nonConsultant" })}
              {isPatient(human as Patient) &&
                Object.values(PatientStatus)[
                  Object.keys(PatientStatus).findIndex(
                    (status) => status === (human as Patient).status
                  )
                ]}
              {isPatient(human as Patient) && " - "}
              {isPatient(human as Patient) &&
                Object.values(PatientType)[
                  Object.keys(PatientType).findIndex(
                    (type) => type === (human as Patient).type
                  )
                ]}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              {human.email}
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              {`${human.location}, ${human.address}`}
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
