import React, { useMemo, useState } from "react";
import {
  Button,
  Flex,
  Text,
  ScaleFade,
  useDisclosure,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import useGetProfile from "../hooks/useGetProfile";
import useEditComment from "../hooks/useEditComment";
import ToggleMenu from "./ToggleMenu";
import TextAreaField from "./TextAreaField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const CardComment = ({ comment }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const [editing, setEditing] = useState(false);
  const toggleButton = () => {
    setReadMoreShown((prevState) => !prevState);
  };
  const { isOpen, onToggle } = useDisclosure();
  const { data: profile } = useGetProfile();
  const { mutate: editComment } = useEditComment();

  const card = useMemo(
    () => (
      <ScaleFade in={onToggle} whileHover={{ scale: 1.01 }}>
        <Flex
          m="1rem"
          h="fit-content"
          backgroundColor="#203449"
          boxShadow="5px 5px black"
          flexDirection="column"
          gap="0.7rem"
          cursor="pointer"
        >
          <Flex
            gap="0.5rem"
            marginLeft="1rem"
            marginRight="1rem"
            marginTop="1rem"
            align="center"
          >
            <Text as="b">{comment.username}</Text>
            <Text color="gray" as="i">
              {moment(comment.created_at).fromNow()}
            </Text>
            {comment.user_id === profile.user_id ? <Spacer /> : null}
            {comment.user_id === profile.user_id ? (
              <ToggleMenu
                cid={comment.comment_id}
                uid={profile.user_id}
                stateChanger={setEditing}
              />
            ) : null}
          </Flex>

          {editing === true ? (
            <Formik
              initialValues={{ comment: comment.comment }}
              validationSchema={Yup.object({
                comment: Yup.string().required("Comment required!"),
              })}
              onSubmit={(values, actions) => {
                const vals = { ...values, comment_id: comment.comment_id };
                actions.resetForm();
                editComment(vals);
                setEditing(false);
              }}
            >
              <VStack as={Form} ml="1rem" mr="1rem" mb="1rem" gap="0.5rem">
                <TextAreaField
                  name="comment"
                  autoComplete="off"
                  as="textarea"
                  minH="5rem"
                  maxH="15rem"
                />
                <Flex alignSelf="flex-end" gap="1rem">
                  <Button type="submit" colorScheme="teal">
                    Edit
                  </Button>
                  <Button
                    alignSelf="flex-end"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </Button>
                </Flex>
              </VStack>
            </Formik>
          ) : comment.comment.length >= 500 ? (
            <Text marginLeft="1rem" marginRight="1rem" marginBottom="1rem">
              {isReadMoreShown
                ? comment.comment
                : comment.comment.slice(0, 500)}
              <Button
                ml="0.7rem"
                colorScheme="teal"
                variant="link"
                onClick={toggleButton}
              >
                {isReadMoreShown ? (
                  <Text as="i">Read Less</Text>
                ) : (
                  <Text as="i">Read More...</Text>
                )}
              </Button>
            </Text>
          ) : (
            <Text marginLeft="1rem" marginRight="1rem" marginBottom="1rem">
              {comment.comment}
            </Text>
          )}
        </Flex>
      </ScaleFade>
    ),
    [
      comment,
      isReadMoreShown,
      setReadMoreShown,
      onToggle,
      profile,
      editing,
      setEditing,
    ]
  );

  return card;
};

export default CardComment;
