import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import TextAreaField from "./TextAreaField";
import * as Yup from "yup";
import useSendPost from "../hooks/useSendPost";

const PostButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: sendPost } = useSendPost();
  const toast = useToast();

  return (
    <>
      <Button
        variant="link"
        colorScheme="black"
        size="md"
        onClick={() => {
          onOpen();
        }}
      >
        Post
      </Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={["sm", "xl", "xl", "xl"]}
        closeOnOverlayClick={false}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <Formik
          initialValues={{
            title: "",
            content: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title required!"),
            content: Yup.string().required("Story required!"),
          })}
          onSubmit={(values, actions) => {
            const vals = { ...values };
            actions.resetForm();
            sendPost(vals);
            toast({
              title: "Your post has been sent",
              position: "top-left",
              isClosable: true,
            });
            onClose();
          }}
        >
          <VStack as={Form}>
            <ModalContent>
              <ModalHeader>Confess your story</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <TextField
                  name="title"
                  placeholder="Your title"
                  autoComplete="off"
                  label="Title :"
                />
                <TextAreaField
                  name="content"
                  placeholder="Write your story here"
                  autoComplete="off"
                  as="textarea"
                  label="Story :"
                />
              </ModalBody>
              <ModalFooter>
                <Button type="submit">Post</Button>
              </ModalFooter>
            </ModalContent>
          </VStack>
        </Formik>
      </Modal>
    </>
  );
};

export default PostButton;
