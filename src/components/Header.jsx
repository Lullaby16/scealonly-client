import React from "react";
import { Flex, Spacer, Text, Button } from "@chakra-ui/react";
import PostButton from "./PostButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex
      backgroundColor="#03A696"
      m="1rem"
      height="35px"
      width="auto"
      alignItems="center"
      boxShadow="5px 5px black"
    >
      <Text paddingLeft="1rem">ScealOnly</Text>
      <Spacer />
      {/* <Button mr="3rem" variant="link" colorScheme="black" size="md">
        Trending
      </Button> */}
      <Button
        mr={["1rem", "1.5rem", "2rem", "3rem"]}
        variant="link"
        colorScheme="black"
        size="md"
        onClick={() => {
          navigate("/donation");
        }}
      >
        Donate
      </Button>
      <Button
        mr={["1rem", "1.5rem", "2rem", "3rem"]}
        variant="link"
        colorScheme="black"
        size="md"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </Button>
      <PostButton />
    </Flex>
  );
};

export default Header;
