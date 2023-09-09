import { Spinner } from "@chakra-ui/react";
import React from "react";

export const Loader = () => {
  return (
    <>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="navy.500"
        size="xl"
      />
    </>
  );
};
