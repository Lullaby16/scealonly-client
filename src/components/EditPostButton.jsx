import React from "react";
import { Button } from "@chakra-ui/react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditPostButton = ({ edit }) => {
  return (
    <Button onClick={() => edit()} variant="outline">
      <FontAwesomeIcon icon={faPenToSquare} size="sm" />
    </Button>
  );
};

export default EditPostButton;
