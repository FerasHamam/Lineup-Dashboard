// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { PatientStatus, PatientType } from "interfaces/PatientInterfaces";
import { useIntl } from "react-intl";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInfo(props: {
  age: number;
  gender: string;
  isConsultant?: boolean;
  status?: string;
  type?: string;
  [x: string]: any;
}) {
  const { status, type, age, gender, isConsultant, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const intl = useIntl();
  return (
    <Card mb={{ base: "0px", lg: "20px" }} alignItems="center" {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="10px"
      >
        {intl.formatMessage({ id: "generalInfo.title" })}
      </Text>
      <SimpleGrid columns={2} gap="10px">
        <Information
          boxShadow={cardShadow}
          title={intl.formatMessage({ id: "generalInfo.age" })}
          value={age}
        />
        <Information
          boxShadow={cardShadow}
          title={intl.formatMessage({ id: "generalInfo.gender" })}
          value={gender}
        />
        {isConsultant !== undefined && (
          <Information
            boxShadow={cardShadow}
            title={intl.formatMessage({ id: "generalInfo.consultant" })}
            value={
              isConsultant
                ? intl.formatMessage({ id: "generalInfo.isConsultant" })
                : intl.formatMessage({ id: "generalInfo.notConsultant" })
            }
          />
        )}
        {status && (
          <Information
            boxShadow={cardShadow}
            title={intl.formatMessage({ id: "generalInfo.status" })}
            value={
              Object.values(PatientStatus)[
                Object.keys(PatientStatus).findIndex((s) => s === status)
              ]
            }
          />
        )}
        {type && (
          <Information
            boxShadow={cardShadow}
            title={intl.formatMessage({ id: "generalInfo.type" })}
            value={
              Object.values(PatientType)[
                Object.keys(PatientType).findIndex((t) => t === type)
              ]
            }
          />
        )}
      </SimpleGrid>
    </Card>
  );
}
