import { useMutation, useQueryClient } from "react-query";

const useSendComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (comment) => {
      fetch(`${import.meta.env.VITE_BE_URL}/comment`, {
        body: JSON.stringify(comment),
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: () => {
        //Invalidate an refetch
        queryClient.refetchQueries("comment");
        queryClient.refetchQueries("total_comments");
        //location.reload();
      },
    }
  );
};

export default useSendComment;
