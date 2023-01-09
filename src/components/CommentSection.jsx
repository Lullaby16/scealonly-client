import React from "react";
import { Button, Flex, VStack, useToast } from "@chakra-ui/react";
import TextAreaField from "./TextAreaField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useSendComment from "../hooks/useSendComment";
import useGetComments from "../hooks/useGetComments";
import CardComment from "./CardComment";

const CommentSection = ({ post }) => {
  const { mutate: sendComment } = useSendComment();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetComments(post.post_id);
  const toast = useToast();
  return (
    <Flex
      w="50%"
      h="100vh"
      flexDirection="column"
      overflowY="scroll"
      css={`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <Flex m="1rem" h="fit-content">
        <Formik
          initialValues={{ comment: "" }}
          validationSchema={Yup.object({
            comment: Yup.string().required("Comment required!"),
          })}
          onSubmit={(values, actions) => {
            const vals = { ...values, post_id: post.post_id };
            actions.resetForm();
            sendComment(vals);
            toast({
              title: "Your comment has been sent",
              position: "top-left",
              isClosable: true,
            });
          }}
        >
          <VStack as={Form} w="95%" gap="1rem">
            <TextAreaField
              name="comment"
              placeholder="Write your comment here"
              autoComplete="off"
              as="textarea"
              maxH="32rem"
              label="Comment here :"
            />
            <Button type="submit" alignSelf="flex-end">
              Post
            </Button>
          </VStack>
        </Formik>
      </Flex>
      {data?.pages?.map((page) =>
        page.posts.map((comment) => <CardComment comment={comment} />)
      )}
      {hasNextPage && !isFetchingNextPage && (
        <Button
          mb="1rem"
          alignSelf="center"
          width="10rem"
          onClick={() => fetchNextPage()}
        >
          View More
        </Button>
      )}
    </Flex>
  );
};

export default CommentSection;
