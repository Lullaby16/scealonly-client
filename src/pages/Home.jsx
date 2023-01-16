import React from "react";
import { Flex } from "@chakra-ui/react";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = () => {
  return (
    <Flex flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Content />
    </Flex>
  );
};

export default Home;
