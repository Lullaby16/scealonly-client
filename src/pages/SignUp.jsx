import React, { useContext, useState } from "react";
import { VStack, ButtonGroup, Button, Heading, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { AccountContext } from "../context/AccountContext";

const SignUp = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email required!").email("Invalid email"),
        username: Yup.string()
          .required("Username required!")
          .min(6, "Username too short!")
          .max(28, "Username too long!"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long!"),
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        actions.resetForm();
        fetch(`${import.meta.env.VITE_BE_URL}/auth/signup`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vals),
        })
          .catch((err) => {
            return;
          })
          .then((res) => {
            if (!res || !res.ok || res.status >= 400) {
              return;
            }
            return res.json();
          })
          .then((data) => {
            if (!data) return;
            setUser({ ...data });
            if (data.status) {
              setError(data.status);
            } else if (data.loggedIn) {
              navigate("/");
            }
          });
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Sign Up</Heading>
        <Text as="p" color="red.500">
          {error}
        </Text>
        <TextField
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
          label="Email"
          boxShadow="5px 5px black"
        />
        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
          boxShadow="5px 5px black"
        />
        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
          type="password"
          boxShadow="5px 5px black"
        />
        <ButtonGroup pt="1rem" spacing="10">
          <Button
            colorScheme="teal"
            border="4px"
            borderColor="blue.500"
            type="submit"
          >
            Create Account
          </Button>
          <Button
            border="4px"
            borderColor="blackAlpha.300"
            onClick={() => navigate("/login")}
            leftIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default SignUp;
