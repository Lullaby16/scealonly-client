import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import useGetProfile from "../hooks/useGetProfile";
import useGetPostDetail from "../hooks/useGetPostDetail";
import useGetTotalComments from "../hooks/useGetTotalComments";
import ExitButton from "../components/ExitButton";
import PostDetail from "../components/PostDetail";
import CommentSection from "../components/CommentSection";
import Loading from "../components/Loading";

const Post = () => {
  const { id } = useParams();
  const { data: post, isLoading: a, error } = useGetPostDetail({ id: id });
  const { data: profile } = useGetProfile();
  const { data: comment, isLoading: b } = useGetTotalComments(id);
  //console.log(post.id);

  if (a) return <Loading />;
  if (b) return <Loading />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Flex w="100%" h="100vh" flexDirection="row">
      <ExitButton />
      <PostDetail post={post} profile={profile} comment={comment} />
      <CommentSection post={post} />
    </Flex>
  );
};

export default Post;
