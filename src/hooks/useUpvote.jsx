import { useMutation, useQueryClient } from "react-query";

const useUpvote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (upvote) => {
      fetch(`${import.meta.env.VITE_BE_URL}/post/upvote`, {
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
