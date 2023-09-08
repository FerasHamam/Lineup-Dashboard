// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card";
import { useIntl } from "react-intl";

export default function Banner(props: {
  banner: string;
  avatar: string;
  name: string;
  job: string;
  cases: number | string;
  patients: number | string;
  [x: string]: any;
}) {
  const { banner, avatar, name, job, cases, patients, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  const intl = useIntl();
  return (
    <>
      <Card mb={{ base: "0px", lg: "20px" }} alignItems="center" {...rest}>
        <Box
          bg={`url(${banner})`}
          bgSize="cover"
          borderRadius="16px"
          h="131px"
          w="100%"
        />
        <Avatar
          mx="auto"
          src={avatar && avatar}
          name={!avatar && name && name}
          h="87px"
          w="87px"
          mt="-43px"
          border="4px solid"
          borderColor={borderColor}
        />
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="xl"
          mt="10px"
        >
          {name}
        </Text>
        <Text color={textColorSecondary} fontSize="sm">
          {job}
        </Text>
        <Flex
          w="100%"
          mx="auto"
          mt="26px"
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"end"}
        >
          <Flex alignItems="center" flexDirection="column">
            <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
              {patients}
            </Text>
            <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
              {intl.formatMessage({ id: "patients" })}
            </Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
              {cases}
            </Text>
            <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
              {intl.formatMessage({ id: "cases" })}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
