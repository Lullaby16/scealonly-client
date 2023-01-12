import { useMutation } from "react-query";

const useLogout = () => {
  return useMutation(async () => {
    const res = await fetch(`${import.meta.env.VITE_BE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!res || !res.ok || res.status >= 400) {
      throw new Error("Something went wrong in the server");
    }
    return await res.json();
  });
};

export default useLogout;
