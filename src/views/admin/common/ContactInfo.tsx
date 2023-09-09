// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { useIntl } from "react-intl";
import Information from "views/admin/profile/components/Information";

// Assets
export default function ContactInfo(props: {
  email: string;
  phone: string;
  location: string;
  address: string;
  [x: string]: any;
}) {
  const { email, phone, location, address, ...rest } = props;
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
        {intl.formatMessage({ id: "contactInfo.title" })}
      </Text>
      <SimpleGrid columns={2} gap="10px">
        <Information
          boxShadow={cardShadow}
          title={intl.formatMessage({ id: "contactInfo.email" })}
          value={email}
        />
        <Information
          boxShadow={cardShadow}
          title={intl.formatMessage({ id: "contactInfo.phone" })}
          value={phone}
        />
        <Information
          boxShadow={cardShadow}
          title={intl.formatMessage({ id: "contactInfo.location" })}
          value={location}
        />
        <Information
          boxShadow={cardShadow}
          title={intl.formatMessage({ id: "contactInfo.address" })}
          value={address}
        />
      </SimpleGrid>
    </Card>
  );
}
