import React from "react";
import { Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const ExitButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        pos="absolute"
        top="0"
        right="0"
        mt="0.5rem"
        variant="ghost"
      >
        <CloseIcon />
      </Button>
    </>
  );
};

export default ExitButton;
