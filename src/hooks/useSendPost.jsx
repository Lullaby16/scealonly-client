import { useMutation, useQueryClient } from "react-query";

const useSendPost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (post) => {
      fetch("http://localhost:4000/post", {
        body: JSON.stringify(post),
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
        queryClient.refetchQueries("post");
        queryClient.refetchQueries("my_post");
        //location.reload();
      },
    }
  );
};

export default useSendPost;
