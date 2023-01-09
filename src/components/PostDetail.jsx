import React, { useState, useMemo } from "react";
import { Flex, Heading, Spacer, Text, VStack, Button } from "@chakra-ui/react";
import { faEye, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAreaField from "./TextAreaField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import moment from "moment";
import EditPostButton from "./EditPostButton";
import DeletePostButton from "./DeletePostButton";
import useEditPost from "../hooks/useEditPost";

const PostDetail = ({ post, profile, comment }) => {
  const [editing, setEditing] = useState(false);
  const { mutate: editPost } = useEditPost();
  const handleEditButton = () => {
    setEditing(true);
  };
  const card = useMemo(
    () => (
      <Flex w="50%" h="100vh" borderRightWidth="2px">
        <Flex m="1rem" flexDirection="column" gap="1rem" w="100%">
          <Flex w="100%" alignItems="center">
            <Heading>{post.title}</Heading>
            {post.user_id === profile?.user_id ? <Spacer /> : null}
            {post.user_id === profile?.user_id ? (
              <Flex gap="0.5rem">
                <EditPostButton edit={handleEditButton} />
                <DeletePostButton
                  PostID={post.post_id}
                  UserID={profile?.user_id}
                />
              </Flex>
            ) : null}
          </Flex>
          <Flex alignItems="center">
            <Text as="u" paddingRight="0.5rem">
              {post.username}
            </Text>
            <Text textColor="GrayText" paddingRight="0.5rem">
              |
            </Text>
            <Text as="i" color="gray" fontSize="sm">
              {moment(post.created_at).fromNow()}
            </Text>
            <Spacer />
            <Text textColor="GrayText" paddingRight="0.5rem">
              #{post.post_id}
            </Text>
            <Text textColor="GrayText" paddingRight="0.5rem">
              |
            </Text>
            <FontAwesomeIcon icon={faEye} size="sm" />
            <Text fontSize="sm" color="gray" paddingLeft="0.25rem">
              {post.view}
            </Text>
            <Text
              textColor="GrayText"
              paddingRight="0.5rem"
              paddingLeft="0.5rem"
            >
              |
            </Text>
            <FontAwesomeIcon icon={faMessage} size="sm" />
            <Text fontSize="sm" color="gray" paddingLeft="0.25rem">
              {comment.length}
            </Text>
          </Flex>
          {editing === false ? (
            <Text whiteSpace="pre-line">{post.content}</Text>
          ) : (
            <Formik
              initialValues={{ content: post.content }}
              validationSchema={Yup.object({
                content: Yup.string().required("Post required!"),
              })}
              onSubmit={(values, actions) => {
                const vals = { ...values, post_id: post.post_id };
                actions.resetForm();
                editPost(vals);
                setEditing(false);
              }}
            >
              <VStack as={Form} w="95%" gap="1rem">
                <TextAreaField
                  name="content"
                  autoComplete="off"
                  as="textarea"
                  minH="7rem"
                  maxH="32rem"
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
          )}
        </Flex>
      </Flex>
    ),
    [post, profile, editing, setEditing, comment]
  );
  return card;
};

export default PostDetail;
