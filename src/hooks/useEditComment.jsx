import { useMutation, useQueryClient } from "react-query";

const useEditComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (content) => {
      fetch(`${import.meta.env.VITE_BE_URL}/comment`, {
        body: JSON.stringify(content),
        method: "PATCH",
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
        //location.reload();
      },
    }
  );
};

export default useEditComment;
