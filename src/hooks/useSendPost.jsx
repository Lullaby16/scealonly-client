import { useMutation, useQueryClient } from "react-query";

const useSendPost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (post) => {
      fetch(`${import.meta.env.VITE_BE_URL}/post`, {
        body: JSON.stringify(post),
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: async () => {
        //Invalidate an refetch
        await queryClient.invalidateQueries(["post"]);
      },
    }
  );
};

export default useSendPost;
