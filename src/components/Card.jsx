import React, { useMemo } from "react";
import {
  Flex,
  Text,
  Heading,
  Spacer,
  ScaleFade,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import useView from "../hooks/useView";
import useGetTotalComments from "../hooks/useGetTotalComments";
import { faEye, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ post }) => {
  const navigate = useNavigate();
  const { mutate: view } = useView();
  const { data: comment, isLoading } = useGetTotalComments(post.id);
  const { isOpen, onToggle } = useDisclosure();

  const card = useMemo(() => {
    if (isLoading) {
      return (
        <Skeleton startColor="#181818" endColor="#162736">
          <Flex width="52rem" height="10rem"></Flex>
        </Skeleton>
      );
    } else {
      return (
        <ScaleFade in={onToggle} whileHover={{ scale: 1.07 }}>
          <Flex
            borderWidth="2px"
            borderColor="black"
            width={["20rem", "30rem", "43rem", "52rem"]}
            maxHeight={["45rem", "30rem", "30rem", "30rem"]}
            backgroundColor="#203449"
            flexDirection="column"
            boxShadow="5px 5px black"
            cursor="pointer"
          >
            <Link
              to={`/post/${post.id}`}
              onClick={() => view({ sum: 1, post_id: post.id })}
            >
              <Heading m="1rem">{post.title}</Heading>
              <Text m="1rem">{post.content.slice(0, 800)}</Text>
              <Flex m="1rem" flexDirection={["column", "row", "row", "row"]}>
                <Flex alignItems="center">
                  <Text textColor="GrayText" paddingRight="0.5rem">
                    #{post.public_id}
                  </Text>
                  <Text textColor="GrayText" paddingRight="0.5rem">
                    |
                  </Text>
                  <FontAwesomeIcon icon={faEye} size="sm" />
                  <Text textColor="GrayText" paddingLeft="0.25rem">
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
                  <Text textColor="GrayText" paddingLeft="0.25rem">
                    {comment.length}
                  </Text>
                </Flex>
                <Spacer />
                <Flex>
                  <Text>{moment(post.created_at).fromNow()}</Text>
                  <Text textColor="GrayText" paddingLeft="0.5rem">
                    |
                  </Text>
                  <Text as="u" paddingLeft="0.5rem">
                    {post.username}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          </Flex>
        </ScaleFade>
      );
    }
  }, [post, navigate, view, comment, isLoading]);
  return card;
};

export default Card;
