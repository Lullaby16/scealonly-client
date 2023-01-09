import { useMutation, useQueryClient } from "react-query";

const useDeletePost = ({ pid, uid }) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      fetch(`http://localhost:4000/post/delete?pid=${pid}&uid=${uid}`, {
        method: "DELETE",
        credentials: "include",
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

export default useDeletePost;
