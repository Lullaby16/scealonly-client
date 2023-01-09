import React from "react";
import { InputGroup, VStack, Button } from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
import useView from "../hooks/useView";

const SearchBar = () => {
  const navigate = useNavigate();
  const { mutate: view } = useView();
  return (
    <InputGroup
      size="md"
      justifyContent="center"
      height="5rem"
      alignItems="center"
    >
      <Formik
        initialValues={{ id: "" }}
        validationSchema={Yup.object({
          id: Yup.number("ID must be number").required("ID required!"),
        })}
        onSubmit={(values, actions) => {
          const vals = values.id;
          view({ sum: 1, post_id: vals });
          navigate(`/post/${vals}`);
        }}
      >
        <VStack
          as={Form}
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          gap="0.5rem"
        >
          <TextField
            name="id"
            width="50rem"
            placeholder="e.g 337561"
            boxShadow="5px 5px black"
            autoComplete="off"
          />
          <Button type="submit" variant="ghost">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </VStack>
      </Formik>
    </InputGroup>
  );
};

export default SearchBar;
