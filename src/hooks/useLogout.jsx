import { useMutation } from "react-query";

const useLogout = () => {
  return useMutation(async () => {
    const res = await fetch("http://localhost:4000/auth/logout", {
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
