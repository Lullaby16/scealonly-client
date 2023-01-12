import React, { useContext } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import useGetProfile from "../hooks/useGetProfile";
import moment from "moment";
import CardMyPost from "./CardMyPost";
import Loading from "./Loading";
import useMyPost from "../hooks/useMyPosts";
import useLogout from "../hooks/useLogout";
import { AccountContext } from "../context/AccountContext";

const CardProfile = () => {
  const { setUser } = useContext(AccountContext);
  const { data } = useGetProfile();
  const {
    data: mypost,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useMyPost();
  const { mutate: logout } = useLogout();
  const post = mypost?.pages[0]?.posts.length;

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Flex m="3rem" w="full" justifyContent="center">
      <Flex
        flexDirection="column"
        align="flex-start"
        gap="3px"
        w="15rem"
        h="fit-content"
        backgroundColor="#03A696"
        boxShadow="5px 5px"
      >
        <Text mt="1rem" ml="1rem" fontSize="2xl">
          {data?.username}
        </Text>
        <Flex ml="1rem" gap="1rem">
          <Text textColor="Highlight" fontSize="sm">
            #{data?.public_id}
          </Text>
          <Text textColor="Highlight" fontSize="sm">
            Joined {moment(data?.created_at).format("MMM YYYY")}
          </Text>
        </Flex>
        <Button
          ml="1rem"
          mb="1rem"
          size="sm"
          colorScheme="red"
          onClick={() => {
            logout(), setUser({ loggedIn: false });
          }}
        >
          Logout
        </Button>
      </Flex>
      {post === 0 ? (
        <Flex w="60rem" justifyContent="center" align="center">
          <Text>You dont have post yet</Text>
        </Flex>
      ) : (
        <Flex
          w="60rem"
          flexDirection="column"
          gap="1rem"
          align="center"
          overflowY="scroll"
          css={`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          <Text fontSize="xl">My post :</Text>
          {mypost?.pages?.map((page) =>
            page.posts.map((post) => <CardMyPost post={post} />)
          )}
          {hasNextPage && !isFetchingNextPage && (
            <Button onClick={() => fetchNextPage()}>View More</Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default CardProfile;
