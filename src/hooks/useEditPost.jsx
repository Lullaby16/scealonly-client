import { useMutation, useQueryClient } from "react-query";

const useEditPost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (content) => {
      fetch("http://localhost:4000/post", {
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
