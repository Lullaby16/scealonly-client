import { useMutation, useQueryClient } from "react-query";

const useView = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (view) => {
      fetch("http://localhost:4000/post/view", {
        body: JSON.stringify(view),
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

export default useView;
