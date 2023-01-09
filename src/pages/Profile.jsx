import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import CardProfile from "../components/CardProfile";
import ExitButton from "../components/ExitButton";

const Profile = () => {
  return (
    <Flex height="100vh" width="full" overflowY="hidden">
      <ExitButton />
      <CardProfile />
    </Flex>
  );
};

export default Profile;
