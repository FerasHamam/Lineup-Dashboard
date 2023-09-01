/*eslint-disable*/

import {
  Flex,
  Icon,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useIntl } from "react-intl";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  const intl = useIntl();
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          {intl.formatMessage({ id: "footer.text" })}
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="mailto:hello@simmmple.com"
          >
            <Icon as={FaInstagram} width="20px" height="20px" color="inherit" />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://www.simmmple.com/licenses"
          >
            <Icon as={FaTwitter} width="20px" height="20px" color="inherit" />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://simmmple.com/terms-of-service"
          >
            <Icon as={FaFacebook} width="20px" height="20px" color="inherit" />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
