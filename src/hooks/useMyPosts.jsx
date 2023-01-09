import { useInfiniteQuery } from "react-query";

const useMyPosts = () => {
  return useInfiniteQuery(
    "my_post",
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `http://localhost:4000/post/my_post?cursor=${pageParam}`,
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

export default useMyPosts;
