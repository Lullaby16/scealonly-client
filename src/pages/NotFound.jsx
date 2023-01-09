import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex height="100vh" width="auto" justifyContent="center" align="center">
      <Flex
        backgroundColor="#203449"
        width="50rem"
        height="25rem"
        justifyContent="center"
        align="center"
        boxShadow="5px 5px black"
      >
        <Text fontSize="9xl">404</Text>
        <Text>Not Found</Text>
      </Flex>
    </Flex>
  );
};

export default NotFound;
