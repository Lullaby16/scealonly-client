import { useQuery } from "react-query";

const useGetTotalComments = (props) => {
  return useQuery(["total_comments", props], async () => {
    const res = await fetch(`http://localhost:4000/comment/total?id=${props}`, {
      credentials: "include",
    });
    if (!res || !res.ok || res.status >= 400) {
      throw new Error("Something went wrong in the server");
    }
    return await res.json();
  });
};

export default useGetTotalComments;
