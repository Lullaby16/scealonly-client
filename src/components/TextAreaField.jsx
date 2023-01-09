import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Field, useField } from "formik";
import { Textarea } from "@chakra-ui/react";
import React from "react";

const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{label}</FormLabel>
      <Textarea as={Field} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextAreaField;
