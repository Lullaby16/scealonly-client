import { useMutation, useQueryClient } from "react-query";

const useEditPost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (content) => {
      fetch(`${import.meta.env.VITE_BE_URL}/post`, {
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
        queryClient.refetchQueries("post");
        //location.reload();
      },
    }
  );
};

export default useEditPost;
