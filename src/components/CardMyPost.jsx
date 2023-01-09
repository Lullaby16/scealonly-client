import React, { useMemo } from "react";
import {
  Flex,
  Text,
  Heading,
  Spacer,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import useView from "../hooks/useView";
import { ViewIcon } from "@chakra-ui/icons";

const CardMyPost = ({ post }) => {
  const navigate = useNavigate();
  const { mutate: view } = useView();
  const { isOpen, onToggle } = useDisclosure();
  const card = useMemo(
    () => (
      <ScaleFade in={onToggle} whileHover={{ scale: 1.07 }}>
        <Flex
          backgroundColor="#203449"
          borderWidth="2px"
          borderColor="black"
          width="52rem"
          maxHeight="30rem"
          //paddingBottom="1rem"
          flexDirection="column"
          boxShadow="5px 5px black"
          key={post.post_id}
          cursor="pointer"
        >
          <Link
            to={`/post/${post.post_id}`}
            onClick={() => view({ sum: 1, post_id: post.post_id })}
          >
            <Heading m="1rem">{post.title}</Heading>
            <Text ml="1rem" mr="1rem">
              {post.content.slice(0, 800)}...
            </Text>
            <Flex m="1rem" alignItems="center">
              <ViewIcon />
              <Text textColor="GrayText" paddingLeft="0.5rem">
                {post.view}
              </Text>
              <Spacer />
              <Text>{moment(post.created_at).fromNow()}</Text>
            </Flex>
          </Link>
        </Flex>
      </ScaleFade>
    ),
    [post, navigate, view]
  );

  return card;
};

export default CardMyPost;
