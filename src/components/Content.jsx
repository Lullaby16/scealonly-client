import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import useFeed from "../hooks/useFeed";
import Card from "./Card";
import SearchBar from "./SearchBar";

const Content = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();
  return (
    <Flex
      flexDirection="column"
      height="100%"
      maxHeight="100%"
      width="98%"
      overflow="hidden"
      padding="0"
      backgroundColor="#203449"
      m="1rem"
      boxShadow="5px 5px black"
    >
      {/* <SearchBar /> */}
      <Flex
        alignItems="center"
        h="full"
        flexDirection="column"
        gap="2rem"
        m="1rem"
        p="1rem"
        overflowY="scroll"
        css={`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {data?.pages?.map((page) =>
          page.posts.map((post) => <Card post={post} />)
        )}
        {hasNextPage && !isFetchingNextPage && (
          <Button onClick={() => fetchNextPage()}>View More</Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Content;
