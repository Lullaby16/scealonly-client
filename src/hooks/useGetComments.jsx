import { useInfiniteQuery } from "react-query";

const useGetComments = (props) => {
  return useInfiniteQuery(
    ["comment", props],
    async (key, pageParam = 0, id = props) => {
      const res = await fetch(
        `${import.meta.env.VITE_BE_URL}/comment?cursor=${pageParam}&id=${id}`,
        {
          credentials: "include",
        }
      );
      if (!res || !res.ok || res.status >= 400) {
        throw new Error("Something went wrong in the server");
      }
      return await res.json();
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.posts.length >= 5 ? lastPage.cursor : undefined;
      },
    }
  );
};

export default useGetComments;
