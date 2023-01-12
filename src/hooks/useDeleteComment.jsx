import { useMutation, useQueryClient } from "react-query";

const useDeleteComment = ({ cid, uid }) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      fetch(`${import.meta.env.VITE_BE_URL}/comment?cid=${cid}&uid=${uid}`, {
        method: "DELETE",
        credentials: "include",
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

export default useDeleteComment;
