import { useQuery } from "react-query";

const useGetProfile = () => {
  return useQuery("profile", async () => {
    const res = await fetch(`${import.meta.env.VITE_BE_URL}/profile`, {
      credentials: "include",
    });
    if (!res || !res.ok || res.status >= 400) {
      throw new Error("Something went wrong in the server");
    }
    return await res.json();
  });
};

export default useGetProfile;
