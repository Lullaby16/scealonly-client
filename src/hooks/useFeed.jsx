import { useInfiniteQuery } from "react-query";

const useFeed = () => {
  return useInfiniteQuery(
    "post",
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${import.meta.env.VITE_BE_URL}/post?cursor=${pageParam}`,
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

export default useFeed;
