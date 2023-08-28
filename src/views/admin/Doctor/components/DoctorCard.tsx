// Chakra imports
import {
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
import { DoctorInfo } from "interfaces/DoctorInterfaces";
// Assets
import { MdArrowForward } from "react-icons/md";

import profileImage from "../../../../assets/img/avatars/avatar6.png";

export default function DoctorCard(props: {
  doctorInfo: DoctorInfo;
  [x: string]: any;
}) {
  const { doctorInfo, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p="14px">
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Image
          h="80px"
          w="80px"
          src={profileImage}
          borderRadius="8px"
          me="20px"
        />
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {doctorInfo.firstName} {doctorInfo.lastName}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            •{doctorInfo.Speciality}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            •{doctorInfo.type}
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
  );
}
