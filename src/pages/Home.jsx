import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = () => {
  return (
    <Flex flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      {/* <Text>{process.env.REACT_APP_BE_URL}</Text> */}
      <Content />
    </Flex>
  );
};

export default Home;
