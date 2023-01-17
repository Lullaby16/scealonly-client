import { useQuery } from "react-query";

const useGetPostDetail = ({ id }) => {
  return useQuery(["detail", id], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BE_URL}/post/detail?id=${id}`,
      {
        credentials: "include",
      }
    );
    if (!res || !res.ok || res.status >= 400) {
      throw new Error("Something went wrong in the server");
    }
    return await res.json();
  });
};

export default useGetPostDetail;
