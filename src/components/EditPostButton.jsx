import React from "react";
import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const EditPostButton = ({ edit }) => {
  return (
    <Button onClick={() => edit()} variant="outline">
      <EditIcon />
    </Button>
  );
};

export default EditPostButton;
