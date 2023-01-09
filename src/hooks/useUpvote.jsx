import { useMutation, useQueryClient } from "react-query";

const useUpvote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (upvote) => {
      fetch("http://localhost:4000/post/upvote", {
        body: JSON.stringify(upvote),
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: () => {
        //Invalidate an refetch
        queryClient.refetchQueries("post");
      },
    }
  );
};

export default useUpvote;
