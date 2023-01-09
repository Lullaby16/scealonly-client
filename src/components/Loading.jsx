import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex justifyContent="center" align="center" height="100vh" width="auto">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="#203449"
        color="#03A696"
        size="xl"
      />
    </Flex>
  );
};

export default Loading;
