import { useQuery } from "react-query";

const useGetTotalComments = (props) => {
  return useQuery(["total_comments", props], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BE_URL}/comment/total?id=${props}`,
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

export default useGetTotalComments;
