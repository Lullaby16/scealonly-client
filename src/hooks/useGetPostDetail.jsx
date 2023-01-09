import { useQuery } from "react-query";

const useGetPostDetail = ({ id }) => {
  return useQuery(["detail", id], async () => {
    const res = await fetch(`http://localhost:4000/post/detail?id=${id}`, {
      credentials: "include",
    });
    if (!res || !res.ok || res.status >= 400) {
      throw new Error("Something went wrong in the server");
    }
    return await res.json();
  });
};

export default useGetPostDetail;
