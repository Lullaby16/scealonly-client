import { useQuery } from "react-query";

const useGetProfile = () => {
  return useQuery("profile", async () => {
    const res = await fetch("http://localhost:4000/profile", {
      credentials: "include",
    });
    if (!res || !res.ok || res.status >= 400) {
      throw new Error("Something went wrong in the server");
    }
    return await res.json();
  });
};

export default useGetProfile;
