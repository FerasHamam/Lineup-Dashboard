// Chakra imports
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import LineupLogoDark from "../../../assets/img/layout/lineupDark.png";
import LineupLogoLight from "../../../assets/img/layout/lineupLight.png";
import { HSeparator } from "components/separator/Separator";
import { mode } from "@chakra-ui/theme-tools";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");
  let logoImage = useColorModeValue(LineupLogoLight, LineupLogoDark);
  return (
    <Flex alignItems="center" flexDirection="column">
      <Image
        src={logoImage}
        h="80px"
        w="200px"
        me="10px"
        my="16px"
        objectFit={"-moz-initial"}
        color={logoColor}
      />
      <HSeparator mb="8px" />
    </Flex>
  );
}

export default SidebarBrand;
